import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer, // Add the counter reducer to the store
	},
});
