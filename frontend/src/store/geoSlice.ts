import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GeoState {
  location: string
}

const initialState: GeoState = {
  location: ''
}

// export const getLocation = createAsyncThunk('geoLocation', async ({}, thunka) => {
//     try {
//         const resp = await axiosInstance.post('/api/initGoogleAuth');
//         return resp.data;
//     }
//     catch(error) {
//         throw(error)
//     }
// });
//

export const getLocation = () => {
    console.log('getLocation')
}




export const geoSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
        },
        resetLocation: (state) => {
            state.location = '';
        }
  },
})

export const { setLocation, resetLocation } = geoSlice.actions;
export default geoSlice.reducer;

