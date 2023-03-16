import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <header className="bg-gray-900 w-full flex justify-between p-4 text-white">
        <button>
            <div className="flex flex-col justify-center gap-1 w-7">
                <span className="border border-white w-full"></span>
                <span className="border border-white w-full"></span>
                <span className="border border-white w-full"></span>
            </div>
        </button>
        <a href="#" className="hover:cursor-pointer underline hover:text-slate-600"><span className="mr-2">Cerrar Sesión</span><FontAwesomeIcon icon={ faCircleUser } /></a>
    </header>
  )
}
