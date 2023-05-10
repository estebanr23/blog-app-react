import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { useForm } from '../../hooks'
import { startRegister } from '../../store/auth';
import { hiddeFormUser } from '../../store/app/appSlice';
import { startUpdateUser } from '../../store/blog/thunks';

/* const initialForm = {
    name: '',
    email: '',
    password: '',
    password_confirm: '',
    area: ''
} */
export const UserForm = () => {

    const { initialFormUser, actionFormUser } = useSelector( state => state.blog )
    const dispatch = useDispatch();
    const { id, name, email, password, password_confirm, area, onInputChange, onResetForm } = useForm( initialFormUser );
    const [ messagePassword, setMessagePassword ] = useState('hidden');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, password, password_confirm, area);

        if (password !== password_confirm) {
            setMessagePassword('inline');
            return;
        }; 

        if (actionFormUser === 'create') {
            dispatch( startRegister(name, email, password) ); // Falta enviar el area
        } else {
            dispatch( startUpdateUser(id, name, email, password) );
        }
        
        dispatch( hiddeFormUser() );
    }

    const onClickCancel = ( event ) => {
        event.preventDefault();
        dispatch( hiddeFormUser() );
    }

  return (
    <div className="bg-white text-black m-8 p-8 rounded-lg">
        <h2 className="text-center text-3xl mb-4">Agregar Usuario</h2>
        <form onSubmit={ onSubmit } className="flex flex-col gap-4 md:grid md:grid-cols-2">
            <div className="flex flex-col">
                <label htmlFor="name">Nombre</label>
                <input 
                type="text" 
                name="name" 
                className="border border-slate-600 rounded-lg w-full py-1 px-2" 
                placeholder="Nombre" 
                value={ name }
                onChange={ onInputChange }
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="username">Email</label>
                <input 
                type="email" 
                name="email" 
                className="border border-slate-600 rounded-lg w-full py-1 px-2" 
                placeholder="Usuario" 
                value={ email }
                onChange={ onInputChange }
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="password">Contraseña</label>
                <input 
                type="password"
                name="password" 
                className="border border-slate-600 rounded-lg w-full py-1 px-2" 
                placeholder="Contraseña" 
                value={ password }
                onChange={ onInputChange }
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="password_confirm">Repetir Contraseña</label>
                <input 
                type="password" 
                name="password_confirm" 
                className="border border-slate-600 rounded-lg w-full py-1 px-2" 
                placeholder="Contraseña" 
                value={ password_confirm }
                onChange={ onInputChange }
                />
                <span className={`${ messagePassword } text-red-600`}><FontAwesomeIcon icon={ faExclamation } /> Las contraseñas no coinciden.</span>
            </div>

            <div className="flex flex-col">
                <label htmlFor="area">Area</label>
                <select name="area" defaultValue="" className="border border-slate-600 rounded-lg w-full py-1 px-2" onChange={ onInputChange }>
                    <option value="" disabled>Seleccionar Area</option>
                    <option value="1">Administracion</option>
                    <option value="2">Informatica</option>
                    <option value="3">Posventas</option>
                </select>
            </div>

            <div className="flex flex-col md:flex-row md:justify-center md:col-span-2">
                <button onClick={ onClickCancel } className="p-2 rounded-lg bg-red-600 text-white hover:bg-red-400 px-10 py-2 inline-block mb-2 md:mb-0 md:mr-4">Cancelar</button>
                {
                    (actionFormUser === 'create')
                    ? <button type="submit" className="p-2 rounded-lg bg-green-600 text-white hover:bg-green-400 px-10 py-2 inline-block">Guardar</button>
                    : <button type="submit" className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-400 px-10 py-2 inline-block">Actualizar</button>
                }
                
            </div>
  
        </form>
    </div>
  )
}
