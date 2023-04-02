import { Route, Routes } from 'react-router-dom'
import { EditPage, HomePage, UserPage } from '../blog/pages'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={ <HomePage /> } />
        <Route path='/users' element={ <UserPage /> } />
        <Route path='/edit' element={ <EditPage /> } />
    </Routes>
  )
}
