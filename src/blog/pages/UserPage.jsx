import { useSelector } from 'react-redux';
import { UserList, UserForm } from '../components'
import { Layout } from '../layouts/layout'

export const UserPage = () => {
  const { activeAddUser } = useSelector( state => state.app );

  return (
    <Layout>
      {
        (!activeAddUser)
          ? <UserList />
          : <UserForm />
      }
    </Layout>
  )
}
