import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducers";

export const rootReducer = combineReducers({
	authReducer,
});