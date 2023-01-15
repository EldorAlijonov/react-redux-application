import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,    //serverga so'rov yuorish uchun
    loggedIn: false,    //foydalanuvchi bizni dasturga kirganmi yoki yoq shuni tekshirish uchun
    user: null,         //o'zimizning foydalanuvchi
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // login
        loginUserStart: (state) => {
            state.isLoading =true;
        },
        loginUserSuccess: (state) => { },
        loginUserFailure: (state) => { },

        // register
        registerUserStart: (state) => {
            state.isLoading = true
        },
        registerUserSuccess: (state) => { },
        registerUserFailure: (state) => { },

    }
})

export const { loginUserStart, registerUserStart } = authSlice.actions;
export default authSlice.reducer