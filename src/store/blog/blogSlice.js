import { createSlice } from "@reduxjs/toolkit";

/* const intialArticle = {
    title: '',
    content: '',
    area: '',
    user: '',
} */

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        articles: [],
        activeArticle: null,
        users: [],
        isLoading: true,
        errorMessage: undefined,
    },
    reducers: {
        onIsLoading: ( state ) => {
            state.isLoading = true;
        },
        onLoadingUsers: ( state, { payload } ) => {
            state.users = payload;
            state.isLoading = false;
            state.errorMessage = undefined;
        },
        onLoadingArticles: ( state, { payload }) => {
            state.isLoading = false;
            state.articles = payload;
            state.errorMessage = undefined;
        },
        setArticle: ( state, { payload }) => {
            state.activeArticle = state.articles.find( art => art.id === payload.id )
        },
        clearActiveNote: () => {
            state.activeArticle = null;
        },
    }
});

export const {
    onIsLoading,
    onLoadingUsers,
    onLoadingArticles,
    setArticle,
    clearActiveNote,
} = blogSlice.actions;