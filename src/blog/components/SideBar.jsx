import { faBook, faCar, faDatabase, faGear, faKey, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SideBar = () => {
  return (
    <aside className="h-screen w-80 hidden lg:block bg-white">
      <h2 className="text-center text-black text-2xl m-4"><b>Blog</b>App</h2>
      <hr />
      
      <ul>
        <a href="#" className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
          <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faUsers } /> General</li>
        </a>
        <a href="#" className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
          <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faBook } /> Administración</li>
        </a>
        <a href="#" className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
          <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faDatabase } /> Informatica</li>
        </a>
        <a href="#" className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
          <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faKey } /> Ventas Comerciales</li>
        </a>
        <a href="#" className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
          <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faCar } /> PosVentas</li>
        </a>
        <a href="#" className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
          <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faGear } /> Parametros</li>
        </a>
        <a href="#" className="inline-block w-full py-4 border-b border-gray-200 hover:cursor-pointer hover:bg-slate-300">
          <li className="ml-5 list-none text-lg font-medium"><FontAwesomeIcon icon={ faUser } /> Usuarios</li>
        </a>
      </ul>
    </aside>
  )
}
