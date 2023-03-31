import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Article } from "../components"

export const NothingSelectedArticle = () => {
  return (
    <div>
        <div className="flex justify-center gap-4 mb-8">
            <input type="text" className="w-1/3 px-2" placeholder="Buscar Articulo"/>
            <button className="bg-gray-600 px-4 py-2 text-white hover:cursor-pointer hover:bg-gray-400"><FontAwesomeIcon icon={ faMagnifyingGlass } /> Search</button>
        </div>

        <Article key="1"/>
        <Article key="2"/>
        <Article key="3"/>
    </div>
  )
}
