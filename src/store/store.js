import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./app/appSlice";
import { authSlice } from "./auth/authSlice";
import { blogSlice } from "./blog/blogSlice";

export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        auth: authSlice.reducer,
        blog: blogSlice.reducer,
    }
});
