import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        activeSidebar: false,
    },
    reducers: {
        showSidebar: (state) => {
            state.activeSidebar = true;
        },
        hiddeSidebar: (state) => {
            state.activeSidebar = false;
        }
    }
})

export const {
    showSidebar,
    hiddeSidebar,
} = appSlice.actions;