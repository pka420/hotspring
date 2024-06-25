import { createSlice, PayloadAction} from '@reduxjs/toolkit';

// types:
// error
// success

export interface NotificationState {
    type: string | null;
    title: string | null;
    message: string | null;
}

const initialState: NotificationState = {
    type: null,
    title: null,
    message: null,
}

export const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        clearStatus(state) {
            state.type = null;
            state.title = null;
            state.message = null;
        },
        setStatus(state, action: PayloadAction<{ type: string, title: string, message: string }>) {
            state.type = action.payload.type;
            state.title = action.payload.title;
            state.message = action.payload.message;
        }
    },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;

