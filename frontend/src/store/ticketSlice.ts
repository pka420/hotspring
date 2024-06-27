import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "./axios";
import { notificationActions } from "./notificationSlice";

export interface ticketState {
    suggestions: string[];
    results?: any;
	favourites: any[];
    isResultsLoading: boolean;
    isFavouritesLoading: boolean;
}

const initialState: ticketState = {
    suggestions: [],
    favourites: [],
    isResultsLoading: false,
    isFavouritesLoading: false,
    results: null
};

export const getKeywordSuggestions = createAsyncThunk<
    any[],
    string,
    { rejectValue: string }
>("getKeywordSuggestions", async (keyword, thunkAPI) => {
    try {
        const resp = await axiosInstance.get(
            `/api/keyword-suggestions?keyword=${keyword}`,
        );
        return resp.data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getEvents = createAsyncThunk<
    any[],
    any,
    { rejectValue: string }
>("getEvents", async (params, thunkAPI) => {
    try {
        let url = `/api/events?`;
        for (const key in params) {
            url += `${key}=${params[key]}&`;
        }
        const resp = await axiosInstance.get(url);
        return resp.data;
    } catch (error: any) {
        thunkAPI.dispatch(notificationActions.setStatus({ type: "error", title: "Error", message: JSON.stringify(error.response.data) }));
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getFavourites = createAsyncThunk<
    any[],
    undefined,
    { rejectValue: string }
>("getFavourites", async (params, thunkAPI) => {
    try {
        const resp = await axiosInstance.get(`/api/favourites`);
        return resp.data;
    } catch (error: any) {
        thunkAPI.dispatch(notificationActions.setStatus({ type: "error", title: "Error getting Favs", message: JSON.stringify(error.response.data) }));
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const createFavourite = createAsyncThunk<
    any,
    any,
    { rejectValue: string }
>("createFavourite", async (body, thunkAPI) => {
    try {
        const resp = await axiosInstance.post(`/api/create-favourites`, body);
        thunkAPI.dispatch(notificationActions.setStatus({ type: "success", title: "Success", message: "Favourite added successfully" }));
        return resp.data;
    } catch (error: any) {
        thunkAPI.dispatch(notificationActions.setStatus({ type: "error", title: "Favourites Error", message: JSON.stringify(error.response.data) }));
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const deleteFavourite = createAsyncThunk<
    any,
    string,
    { rejectValue: string }
>("deleteFavourite", async (eventId, thunkAPI) => {
    try {
        const resp = await axiosInstance.delete(`/api/delete-favourites/${eventId}`);
        thunkAPI.dispatch(notificationActions.setStatus({ type: "success", title: "Success", message: "Favourite removed successfully" }));
        return eventId;
    } catch (error: any) {
        thunkAPI.dispatch(notificationActions.setStatus({ type: "error", title: "Favourites Error", message: JSON.stringify(error.response.data) }));
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFavourites.pending, (state) => {
                state.isFavouritesLoading = true;
            })
            .addCase(getEvents.pending, (state) => {
                state.isResultsLoading = true;
            })
            .addCase(getKeywordSuggestions.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.suggestions = action.payload;
            })
            .addCase(getKeywordSuggestions.rejected, (state) => {
                state.suggestions = [];
            })
            .addCase(getEvents.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.results = action.payload;
                state.isResultsLoading = false;
            })
            .addCase(getEvents.rejected, (state, action: PayloadAction<any>) => {
                state.results = null;
                state.isResultsLoading = false;
            })
            .addCase(getFavourites.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.favourites = action.payload;
                state.isFavouritesLoading = false;
            })
            .addCase(getFavourites.rejected, (state) => {
                state.favourites = [];
                state.isFavouritesLoading = false;
            })
            .addCase(createFavourite.fulfilled, (state, action: PayloadAction<any>) => {
                state.favourites.push(action.payload);
            })
            .addCase(createFavourite.rejected, (state, action: PayloadAction<any>) => {
            })
    },
});

export default ticketSlice.reducer;
