import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import axiosInstance from './axios';
import { AxiosResponse } from "axios";

export interface GeoState {
  location: string
}

const initialState: GeoState = {
  location: ''
}

export const getLocation = createAsyncThunk<
    AxiosResponse<any, any>,
    undefined,
    { rejectValue: string }
>("getLocation", async (params, thunkAPI) => {
    try {
        const resp = axiosInstance.get(`/api/geo-location`);
        return resp;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const geoSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLocation.fulfilled, (state, action: PayloadAction<any>) => {
                state.location = action.payload.data;
            })
            .addCase(getLocation.rejected, (state) => {
                state.location = '';
            });
  },
})

export const { } = geoSlice.actions;
export default geoSlice.reducer;

