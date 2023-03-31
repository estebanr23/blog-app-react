
export const UserForm = () => {
  return (
    <div className="bg-white text-black m-8 p-8 rounded-lg">
        <h2 className="text-center">Agregar Usuario</h2>
        <form action="#" className="flex flex-col gap-4">
            <div className="flex flex-col">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" className="border border-slate-600 rounded-lg w-full py-1 px-2" placeholder="Nombre" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="username">Usuario</label>
                <input type="text" name="username" className="border border-slate-600 rounded-lg w-full py-1 px-2" placeholder="Usuario" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" className="border border-slate-600 rounded-lg w-full py-1 px-2" placeholder="Contraseña" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="password_confirm">Repetir Contraseña</label>
                <input type="password" name="password_confirm" className="border border-slate-600 rounded-lg w-full py-1 px-2" placeholder="Contraseña" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="area">Area</label>
                <select name="area" className="border border-slate-600 rounded-lg w-full py-1 px-2">
                    <option value="" disabled selected>Seleccionar Area</option>
                    <option value="1">Administracion</option>
                    <option value="2">Informatica</option>
                    <option value="3">Posventas</option>
                </select>
            </div>

            <button className="p-2 rounded-lg bg-green-600 text-white hover:bg-green-400">Guardar</button>
  
        </form>
    </div>
  )
}
