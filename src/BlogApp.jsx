
export const BlogApp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
        <div className="bg-white w-96 rounded-lg">
            <h2 className="text-center mt-4">Iniciar Sesion</h2>
            <div className="flex flex-col justify-center items-center gap-y-4 mx-8 my-4">
                <input className="border border-black rounded-md p-1.5 w-full" type="text" name="user" placeholder="Ususario"/>

                <input className="border border-black rounded-md p-1.5 w-full" type="password" name="password" placeholder="Contraseña"/>

                <button className="border border-gray-800 bg-gray-800 hover:border-gray-500 hover:bg-gray-500 text-white rounded-md py-2 w-40">Ingresar</button>
            </div>
        </div>
    </div>
  )
}
