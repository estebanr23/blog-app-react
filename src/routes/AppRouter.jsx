import { Route, Routes } from 'react-router-dom'
import { HomePage, UserPage } from '../blog/pages'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={ <HomePage /> } />
        <Route path='/users' element={ <UserPage /> } />
    </Routes>
  )
}
