import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { rootReducer } from "./rootReducers";

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false, // Disable the serializable check
		}),
});

export const persistor = persistStore(store);