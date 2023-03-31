import { UserList, UserForm } from '../components'
import { Layout } from '../layouts/layout'

export const UserPage = () => {
  const users = false;
  return (
    <Layout>
      {
        (users)
          ? <UserList />
          : <UserForm />
      }
      
    </Layout>
  )
}
