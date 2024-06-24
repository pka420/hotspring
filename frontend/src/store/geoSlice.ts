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
    void,
    { rejectValue: string }
>("getLocation", async (ip_address, thunkAPI) => {
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
            .addCase(getLocation.fulfilled, (state, action) => {
                state.location = action.payload.data;
            })
            .addCase(getLocation.rejected, (state, action) => {
                state.location = '';
            });
  },
})

export const { } = geoSlice.actions;
export default geoSlice.reducer;

