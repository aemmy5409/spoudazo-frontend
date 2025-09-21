import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
	"auth/userLogin",
	async ({ username, password }, { rejectWithValue }) => {
	  try {
		const formData = new URLSearchParams();
		formData.append("username", username);
		formData.append("password", password);
  
		const { data } = await axios.post(
		  `${import.meta.env.VITE_API_URL}/auth/login`,
		  formData,
		  {
			headers: {
			  "Content-Type": "application/x-www-form-urlencoded",
			},
			withCredentials: true,
		  }
		);
  
		if (data?.access_token) {
			localStorage.setItem("token", data.access_token);
		}


		return data;
	  } catch (err) {
		return rejectWithValue(err.response?.data?.message || "Login failed");
	  }
	}
);
  

export const userRegister = createAsyncThunk(
	"auth/userRegister",
	async ({ matric_no, name, email, department, level, password }, { rejectWithValue }) => {
		try {
			const { data } = await axios.post(
				`${import.meta.env.VITE_API_URL}/auth/signup`,
				{ matric_no, name, email, department, level, password },
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			console.log(data)
			return data;
		} catch (err) {
			return rejectWithValue(err.response.data.message);
		}
	}
);

export const userLogout = createAsyncThunk(
	"auth/userLogout",
	async (_, { rejectWithValue }) => {
		// No localStorage cleanup here — redux-persist will handle it if you purge
		try {
			localStorage.clear();
			return {};
		} catch (err) {
			return rejectWithValue(err.response.data.message);
		}
	}
);