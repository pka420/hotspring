import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import geoReducer from "./geoSlice";
import ticketReducer from "./ticketSlice";

export const store = configureStore({
    reducer: combineReducers({
        geo: geoReducer,
        tickets: ticketReducer,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
