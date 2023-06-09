import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { showSidebar } from '../../store/app/appSlice';
import { startLogout } from '../../store/auth';

export const Header = () => {

  const { activeSidebar } = useSelector( state => state.app );
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch( showSidebar() );
  }

  const handleLogout = () => {
    dispatch( startLogout() );
  }

  const handleBack = () => {

  }

  return (
    <header className="bg-gray-900 w-full flex justify-between p-4 text-white">
      <div className="flex">
        <button onClick={ toggleSidebar } className="mr-2">
            <div className="flex flex-col justify-center gap-1 w-7 xl:hidden">
                <span className="border border-white w-full"></span>
                <span className="border border-white w-full"></span>
                <span className="border border-white w-full"></span>
            </div>
        </button>
        {/* <button onClick={ handleBack } className="border rounded-lg border-red-600 text-red-600 py-1 px-6">Atras</button> */}
      </div>
      <button onClick={ handleLogout } className="hover:cursor-pointer underline hover:text-slate-600"><span className="mr-2">Cerrar Sesión</span><FontAwesomeIcon icon={ faCircleUser } /></button>
    </header>
  )
}
