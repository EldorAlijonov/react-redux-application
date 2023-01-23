import { createSlice } from '@reduxjs/toolkit';
import { setItem } from '../components/helpers/persistens-storage';

const initialState = {
    isLoading: false,    //serverga so'rov yuorish uchun
    loggedIn: false,    //foydalanuvchi bizni dasturga kirganmi yoki yoq shuni tekshirish uchun
    user: null,         //o'zimizning foydalanuvchi
    error: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUserStart: (state) => {
            state.isLoading = true;
        },
        signUserSuccess: (state, action) => {
            state.loggedIn = true
            state.isLoading = false
            state.user = action.payload
            setItem("token", action.payload.token)
        },
        signUserFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const { signUserStart, signUserFailure, signUserSuccess, } = authSlice.actions;
export default authSlice.reducer