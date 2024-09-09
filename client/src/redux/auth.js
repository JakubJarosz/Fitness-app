import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
  user: [], 
  isAuthenticated: false, 
  hasParams: false,
  loading: false,
  error: null,
}


export const fetchUser = createAsyncThunk("authuser/fetchUser", async () => {
    const response = await axios.get("/profile");
    return response.data

})

export const logoutUser = createAsyncThunk("authuser/logoutUser", async () => {
     await axios.post("/logout");
})


const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.data;
            state.hasParams = action.payload.success
            state.isAuthenticated = true;
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.error = action.payload
        })
        builder.addCase(logoutUser.pending, state => {
            state.loading = true
            state.user = []
            state.isAuthenticated = false;
        })
        builder.addCase(logoutUser.fulfilled, state => {
            state.loading = false;
            state.user = []
            state.isAuthenticated = false;
        })
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})



export default authSlice.reducer