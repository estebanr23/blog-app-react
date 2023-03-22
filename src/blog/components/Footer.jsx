import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full flex justify-between p-4 text-white">
        <p>Todos los Derechos Reservados <FontAwesomeIcon icon={ faCopyright } />{ new Date().getFullYear() }</p>
        <p><b>Blog</b>App</p>
    </footer>
  )
}
