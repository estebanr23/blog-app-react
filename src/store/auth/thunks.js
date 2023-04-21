import { blogApi } from '../../api';
import { onCheking, onLogin, onLogout } from './';

export const startLogin = (email, password) => {
    return async( dispatch ) => {
        dispatch( onCheking() );

        const { data } = await blogApi.post('/auth/login', { email, password });

        // Manejar los errores
        if (!data.ok) return dispatch( onLogout( data.errorMessage ) );

        const { id, name } = data.user;
        dispatch( onLogin({id, name}) );
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({ id:id, name: name }));
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        /* const { data } = await blogApi.post('/auth/logout');
        console.log(data);

        if (data.ok) {
            localStorage.clear();
            return dispatch( onLogout() );
        }  */

        localStorage.clear();
        return dispatch( onLogout() );
    }
}

export const startRegister = (name, email, password) => {
    return async() => {

        try {
            await blogApi.post('/auth/register', { name, email, password });
            //TODO: Mostrar mensaje de exito al guardar usuario
        } catch (error) {
            console.log(error.response.data.errors);
            //TODO: Mostrar mensaje de error al guardar usuario
        }

    }
}
