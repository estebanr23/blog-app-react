import { MainBlog, SideBar } from './blog/components'

export const BlogApp = () => {
  return (
   <div className="h-screen flex">

    <SideBar />

    <MainBlog />

   </div>
  )
}
