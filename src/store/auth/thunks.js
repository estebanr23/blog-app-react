import Swal from 'sweetalert2';
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

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: false,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
            icon: 'success',
            title: 'Usuario creado'
            })

        } catch (error) {
            const err = error.response.data.errors;
            const properties = { ...err };
            // console.log(properties);

            const [ messageValidation ] = Object.values(properties);
            // console.log(messageValidation)
            
            Swal.fire('Error en registro de usuario', messageValidation[0], 'error');
        }

    }
}
