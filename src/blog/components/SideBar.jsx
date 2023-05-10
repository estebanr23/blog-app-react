import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { startLoadingAreas } from '../../store/blog/thunks';
import { faBook, faCar, faDatabase, faGear, faKey, faTimes, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { hiddeSidebar } from '../../store/app/appSlice';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { activeSidebar } = useSelector( state => state.app );
    const { areas } = useSelector( state => state.blog );

    const toggleSidebar = () => {
        dispatch( hiddeSidebar() );
        handleSidebar();
    }

    const handleSidebar = () => {
        return (activeSidebar) ? 'absolute block' : 'hidden fixed';
    }
    
    useEffect(() => {
        dispatch( startLoadingAreas() );
    }, [])
 
  return (
    <aside className={`h-screen w-80 xl:block bg-white ${ handleSidebar() } `}> 
        <div className="flex justify-between xl:block">
            <h2 className="xl:text-center xl:mx-0 text-black text-2xl my-4 ml-5"><b>Blog</b>App</h2>
            <button className="mr-4 hover:cursor-pointer xl:hidden text-lg" onClick={ toggleSidebar }><FontAwesomeIcon icon={ faTimes } /></button>
        </div>
        <hr />
        
        <ul>
            {
                areas.map( area => (
                    <Link to={`/home/${ area.id }`} key={ area.id } className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
                        <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faUsers } /> { area.name }</li>
                    </Link>
                ))
            }

            <Link to={'/home'} className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
                <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faGear } /> Areas</li>
            </Link>

            <Link to={'/users'} className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
                <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faUser } /> Usuarios</li>
            </Link>
        </ul>

        {/* <ul>
            <Link to={'/home'} className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
                <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faUsers } /> General</li>
            </Link>

            <Link to={'/home'} className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
                <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faBook } /> Administración</li>
            </Link>

            <Link to={'/home'} className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
                <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faDatabase } /> Informatica</li>
            </Link>

            <Link to={'/home'} className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
                <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faKey } /> Ventas Comerciales</li>
            </Link>

            <Link to={'/home'} className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
                <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faCar } /> PosVentas</li>
            </Link>

            <Link to={'/home'} className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
                <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faGear } /> Parametros</li>
            </Link>

            <Link to={'/users'} className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
                <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faUser } /> Usuarios</li>
            </Link>
        </ul> */}
    </aside>
  )
}
