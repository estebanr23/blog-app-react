import { blogApi } from "../../api";
import { onIsLoading, onLoadingArticles, onLoadingUsers } from "./blogSlice";

export const startLoadingUsers = () => {
    return async( dispatch ) => {
        dispatch( onIsLoading() );
        const { data: response } = await blogApi.get('/auth/users');
        const users = response.data;
        console.log(users);

        dispatch( onLoadingUsers( users ) );
    }
}

export const startLoadingArticles = () => {
    return async( dispatch ) => {
        dispatch( onIsLoading() );
        const { data: response } = await blogApi.get('/articles');
        const articles = response.data;
        console.log(articles);

        dispatch( onLoadingArticles( articles ) );
    }
}