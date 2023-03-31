import { Footer, Header, SideBar } from '../components'

export const Layout = ({ children }) => {
  return (
   <div className="h-screen flex">

    <SideBar />

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
