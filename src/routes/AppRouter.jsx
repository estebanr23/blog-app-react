import { Navigate, Route, Routes } from 'react-router-dom'
import { EditPage, HomePage, UserPage } from '../blog/pages'
import { LoginPage } from '../auth/pages/LoginPage'
import { useCheckAuth } from '../hooks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const AppRouter = () => {

  const { status, checkUser } = useCheckAuth();

  useEffect(() => {
    checkUser();
  }, [])

  if ( status === 'checking') {
    return (
      <h2>Cargando...</h2>
    );
  }

  return (
    <Routes>
        {
          status === 'not-authenticated'
          ? (
            <>
              <Route path='/auth/login' element={ <LoginPage /> } />
              <Route path='/*' element={ <Navigate to="/auth/login" /> } />
            </>
          )
          : (
            <>
              <Route path='/home' element={ <HomePage /> } />
              <Route path='/edit' element={ <EditPage /> } />
              <Route path='/users' element={ <UserPage /> } />
              <Route path='/*' element={ <Navigate to="/home" /> } />
            </>
          )
        }

        {/* <Route path='/*' element={ <HomePage /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/users' element={ <UserPage /> } />
        <Route path='/edit' element={ <EditPage /> } /> */}
    </Routes>
  )
}
