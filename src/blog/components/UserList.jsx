import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingUsers } from '../../store/blog/thunks';
import { Spinner } from './Spinner';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { showFormUser } from '../../store/app/appSlice';

export const UserList = () => {
    const dispatch = useDispatch();
    const { users, isLoading, errorMessage } = useSelector( state => state.blog );

    useEffect(() => {
      dispatch( startLoadingUsers() );
    }, []);

    const onClickAddUser = ( event ) => {
        event.preventDefault();
        dispatch( showFormUser() );
    }
    
  return (
    <>
        {
            (isLoading)
            ? (<Spinner/>)
            : (
                <div>
                    <h2 className="text-center text-white text-4xl mb-4">Lista de Usuarios</h2>
                    <div className="bg-white text-black m-8 px-8 pb-8 pt-4 rounded-lg">
                        <div className="text-right">
                            <button onClick={ onClickAddUser } className="border border-green-600 rounded-lg bg-white text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 mb-3"><FontAwesomeIcon icon={ faUserPlus } /> Nuevo</button>
                        </div>
                        <table className="border-collapse border border-slate-500 w-full">
                            <thead>
                                <tr>
                                    <td className="border border-slate-600 pl-2 py-1 font-bold">Nombre</td>
                                    <td className="border border-slate-600 pl-2 py-1 font-bold hidden lg:table-cell">Email</td>
                                    <td className="border border-slate-600 pl-2 py-1 font-bold hidden md:table-cell ">Area</td>
                                    <td className="border border-slate-600 pl-2 py-1 font-bold hidden lg:table-cell">Rol</td>
                                    <td className="border border-slate-600 pl-2 py-1 font-bold">Acciones</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map( user => 
                                        (
                                            <tr key={user.id}>
                                                <td className="border border-slate-600 pl-2 py-1">{user.name}</td>
                                                <td className="border border-slate-600 pl-2 py-1 hidden lg:table-cell">{user.email}</td>
                                                <td className="border border-slate-600 pl-2 py-1 hidden md:table-cell">Informatica</td>
                                                <td className="border border-slate-600 pl-2 py-1 hidden lg:table-cell">Administrador</td>
                                                <td className="border border-slate-600 pl-2 py-1">
                                                    <button className="p-2 rounded-lg bg-green-600 text-white hover:bg-green-400 w-10 mr-2">M</button>
                                                    <button className="p-2 rounded-lg bg-red-600 text-white hover:bg-red-400 w-10">E</button>
                                                </td>
                                            </tr>
                                        )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    </>    
  )
}
