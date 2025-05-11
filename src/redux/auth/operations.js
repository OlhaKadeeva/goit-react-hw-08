import { createAsyncThunk } from "@reduxjs/toolkit";

import instance from "../api";

// Додаємо токен до заголовків
const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Видаляємо токен
const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};

// РЕЄСТРАЦІЯ
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("This email or name already registered");
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// ЛОГІН
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Wrong login or password");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ЛОГАУТ
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await instance.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// ОНОВЛЕННЯ користувача
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) return thunkAPI.rejectWithValue("No token");

    try {
      setAuthHeader(token);
      const res = await instance.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
