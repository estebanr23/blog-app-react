import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        activeSidebar: false,
        activeAddUser: false,
    },
    reducers: {
        showSidebar: (state) => {
            state.activeSidebar = true;
        },
        hiddeSidebar: (state) => {
            state.activeSidebar = false;
        },
        showFormUser: (state) => {
            state.activeAddUser = true;
        },
        hiddeFormUser: (state) => {
            state.activeAddUser = false;
        },
    }
})

export const {
    showSidebar,
    hiddeSidebar,
    showFormUser,
    hiddeFormUser,
} = appSlice.actions;