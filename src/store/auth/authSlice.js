import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // checking, authenticated, not-authenticated
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        onCheking: ( state ) => {
            state.status = 'checking';
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: () =>{
            state.errorMessage = undefined;
        }
    }
});

export const {
    onCheking,
    onLogin,
    onLogout,
    clearErrorMessage,
} = authSlice.actions;