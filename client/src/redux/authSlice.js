import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  "authuser/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/profile");
      return data;
    } catch (err) {
      if (err.response) {
        return rejectWithValue(err.response.data?.message ?? err.response.data);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "authuser/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/logout");
      return true;
    } catch (err) {
      if (err.response) return rejectWithValue(err.response.data?.message ?? err.response.data);
      return rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: "authuser",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;               
        state.user = null;
        state.isAuthenticated = false;       
        state.error = action.payload || action.error?.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error?.message;
      });
  },
});

export default authSlice.reducer;