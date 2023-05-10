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
        areas:[],
        activeArticle: null,
        users: [],
        isLoading: true,
        errorMessage: undefined,
        initialFormUser: { // Form para crear y editar usuarios
            id: null,
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            area: '',
        },
        actionFormUser: 'create', // create, edit
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
        onLoadingDeleteUser: ( state, { payload } ) => {
            state.isLoading = false;
            state.errorMessage = undefined;
            state.users = state.users.filter( user => user.id !==  payload );
        },
        setInitialFormUser: ( state, { payload }) => {
            state.actionFormUser = 'edit';
            state.initialFormUser = {
                id: payload.id,
                name: payload.name,
                email: payload.email,
                password: '',
                password_confirm: '',
                area: '',
            };
        },
        onLoadingArticles: ( state, { payload }) => {
            state.isLoading = false;
            state.articles = payload;
            state.errorMessage = undefined;
        },
        setArticle: ( state, { payload = null }) => {
            ( !payload )
                ? state.activeArticle = null
                : state.activeArticle = state.articles.find( art => art.id === payload.id )
        },
        clearActiveNote: () => {
            state.activeArticle = null;
        },
        clearFormUser: ( state ) => {
            state.initialState = {
                name: '',
                email: '',
                password: '',
                password_confirm: '',
                area: '',
            }
        },
        onLoadingAreas: ( state, { payload } ) => {
            state.isLoading = false;
            state.areas = payload;
            state.errorMessage = undefined;
        },
    }
});

export const {
    onIsLoading,
    onLoadingUsers,
    onLoadingDeleteUser,
    setInitialFormUser,
    onLoadingArticles,
    setArticle,
    clearActiveNote,
    clearFormUser,
    onLoadingAreas,
} = blogSlice.actions;