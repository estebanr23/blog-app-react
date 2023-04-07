import { useSelector } from 'react-redux'
import { Footer, Header, Sidebar} from '../components'

export const Layout = ({ children }) => {

  const { activeSidebar } = useSelector( state => state.app );

  return (
   <div className="h-screen flex">

    <Sidebar />

    <div className="w-full flex flex-col xl:ml-80">
      <Header />

      <section className="flex flex-col flex-1 bg-gray-800 w-full py-8">
        { children }
      </section>

      <Footer />
    </div>

   </div>
  )
}
