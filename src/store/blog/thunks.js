import { blogApi } from "../../api";
import { hiddeFormUser, showFormUser } from "../app/appSlice";
import { onIsLoading, onLoadingAreas, onLoadingArticles, onLoadingDeleteUser, onLoadingUsers, setInitialFormUser } from "./blogSlice";

export const startLoadingUsers = () => {
    return async( dispatch ) => {
        dispatch( onIsLoading() );
        const { data: response } = await blogApi.get('/auth/users');
        const users = response.data;
        console.log(users);

        dispatch( onLoadingUsers( users ) );
    }
}

// Articulos por area
export const startLoadingArticles = (id = 1) => {
    return async( dispatch ) => {
        dispatch( onIsLoading() );
        const { data: response } = await blogApi.get(`/articles/area/${ id }`);
        const articles = response.data;
        console.log(articles);
        console.log(id)

        dispatch( onLoadingArticles( articles ) );
    }
}

export const startDeleteUser = (id) => {
    return async( dispatch ) => {
        dispatch( onIsLoading() );
        const data = await blogApi.delete(`/auth/users/${ id }`);
        // console.log(data);
        dispatch( onLoadingDeleteUser( id ) );
    }
}

export const startEditUser = (id) => {
    return async( dispatch ) => {
        const { data: { user } } = await blogApi.get(`/auth/users/${ id }`);
        console.log(user);
        dispatch( setInitialFormUser( user ) );
        dispatch( showFormUser() );
    }
}

export const startUpdateUser = (id, name, email, password) => {
    return async( dispatch ) => {
        const { data: { message } } = await blogApi.put(`/auth/users/${ id }`, { name, email, password });
        console.log(message);
    }
}

export const startLoadingAreas = () => {
    return async( dispatch ) => {
        const { data: response } = await blogApi.get('/areas');
        const areas = response.data;

        dispatch( onLoadingAreas( areas ) );
    }   
}

export const startSaveArticle = () => {
    return async( dispatch ) => {
        const { data: response } = await blogApi.post('/articles');
        const areas = response.data;

    }   
}