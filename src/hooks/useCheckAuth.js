import { useDispatch, useSelector } from "react-redux"
import { onLogin, startLogout } from "../store/auth";
import { useEffect } from "react";

export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const checkUser = () => {
        const token = localStorage.getItem('token');
        if(!token) return dispatch( startLogout() );

        const { id, name } = JSON.parse(localStorage.getItem('user'));
        dispatch( onLogin( {id, name} ) );
    }
    
    return {
        status,
        checkUser,
    };
}
