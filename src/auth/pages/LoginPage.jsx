import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';
import { startLogin } from '../../store/auth';

const initialForm = {
  email: '',
  password:'',
}
export const LoginPage = () => {

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(initialForm);

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( startLogin(email, password) );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
        <div className="bg-white w-96 rounded-lg">
            <h2 className="text-center mt-4 text-3xl font-semibold">Iniciar Sesion</h2>
            <form onSubmit={ onSubmit }>
              <div className="flex flex-col justify-center items-center gap-y-4 mx-8 my-4">
                  <input 
                  className="border border-black rounded-md p-1.5 w-full" 
                  type="text" 
                  name="email" 
                  value={ email }
                  onChange={ onInputChange }
                  placeholder="Email"/>

                  <input 
                  className="border border-black rounded-md p-1.5 w-full" 
                  type="password" 
                  name="password" 
                  value={ password }
                  onChange={ onInputChange }
                  placeholder="Contraseña"/>

                  <button 
                    type="submit"
                    className="border border-gray-800 bg-gray-800 hover:border-gray-500 hover:bg-gray-500 text-white rounded-md py-2 w-40">
                    Ingresar
                  </button>
              </div>
            </form>            
        </div>
    </div>
  )
}
