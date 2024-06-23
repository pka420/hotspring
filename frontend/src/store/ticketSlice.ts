import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from './axios';
import { AxiosResponse } from 'axios';

export interface ticketState {
	suggestions: string[];
}

const initialState: ticketState = {
	suggestions: [],
}

export const getKeywordSuggestions = createAsyncThunk<
    AxiosResponse<any, any>,
    string,
    { rejectValue: string }
>('getKeywordSuggestions', async (keyword, thunkAPI) => {
    try {
        const resp = axiosInstance.get(`/api/keyword-suggestions/?keyword=${keyword}`);
        return resp;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {},
	extraReducers: (builder) => {
		builder
		.addCase(getKeywordSuggestions.fulfilled, (state, action) => {
			state.suggestions = action.payload.data;
		});
  },
})

export const { } = ticketSlice.actions;
export default ticketSlice.reducer;

