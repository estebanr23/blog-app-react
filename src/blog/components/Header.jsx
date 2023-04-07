import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { showSidebar } from '../../store/app/appSlice';

export const Header = () => {

  const dispatch = useDispatch();
  const { activeSidebar } = useSelector( state => state.app )

  const toggleSidebar = () => {
    dispatch( showSidebar() );
  }

  return (
    <header className="bg-gray-900 w-full flex justify-between p-4 text-white">
        <button onClick={ toggleSidebar }>
            <div className="flex flex-col justify-center gap-1 w-7 xl:hidden">
                <span className="border border-white w-full"></span>
                <span className="border border-white w-full"></span>
                <span className="border border-white w-full"></span>
            </div>
        </button>
        <a href="#" className="hover:cursor-pointer underline hover:text-slate-600"><span className="mr-2">Cerrar Sesión</span><FontAwesomeIcon icon={ faCircleUser } /></a>
    </header>
  )
}
