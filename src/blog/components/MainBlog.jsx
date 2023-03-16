import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { Article } from './Article'
import { Header } from './Header'


export const MainBlog = () => {
  return (
    <div className="w-full flex flex-col">
      
      <Header />

      <main className="flex flex-col flex-1 bg-gray-800 w-full py-8">
        <div className="flex justify-center gap-4 mb-8">
            <input type="text" className="w-1/3 px-2" placeholder="Buscar Articulo"/>
            <button className="bg-gray-600 px-4 py-2 text-white hover:cursor-pointer hover:bg-gray-400"><FontAwesomeIcon icon={ faMagnifyingGlass } /> Search</button>
        </div>

        <Article key="1"/>
        <Article key="2"/>

      </main>

      <footer className="bg-gray-900 w-full flex justify-between p-4 text-white">
        <p>Todos los Derechos Reservados <FontAwesomeIcon icon={ faCopyright } />{ new Date().getFullYear() }</p>
        <p><b>Blog</b>App</p>
      </footer>
    </div>
  )
}
