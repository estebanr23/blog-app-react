import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Article = () => {
  return (
    <article className="border rounded-lg border-white mx-12 text-white px-4 py-4 mb-8 md:flex md:gap-4">
      <div className="md:w-2/6 lg:w-72">
        <img src="src/assets/image-1.jpg" alt="Imagen de Articulo" className="bg-center bg-no-repeat bg-contain md:h-40 md:w-full" />
      </div>
      <div className="md:w-4/6 lg:w-full">
        <h2 className="text-4xl mb-2 truncate">Titulo de Articulo Titulo de Articulo</h2>
        <p className="text-justify h-16 leading-tight text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Quasi corrupti quis culpa distinctio assumenda modi sit ut quaerat pariatur ipsam. Tempora neque dolorum explicabo maxime sed voluptatibus 
        itaque hic debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem reiciendis repellendus rem ducimus ipsam consectetur 
        inventore minima accusamus, nam, officia quaerat qui possimus iusto tenetur sequi perspiciatis, ratione aliquam!</p>
        <button className="bg-gray-600 px-4 py-2 mt-2 hover:cursor-pointer hover:bg-gray-400">Leer <FontAwesomeIcon icon={ faArrowRight } /></button>
      </div>
    </article>
  )
}
