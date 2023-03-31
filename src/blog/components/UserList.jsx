
export const UserList = () => {
  return (
    <div className="bg-white text-black m-8 p-8 rounded-lg">
        <table className="border-collapse border border-slate-500 w-full">
            <thead>
                <tr>
                    <td className="border border-slate-600 pl-2 py-1 font-bold">Nombre</td>
                    <td className="border border-slate-600 pl-2 py-1 font-bold">Usuario</td>
                    <td className="border border-slate-600 pl-2 py-1 font-bold">Area</td>
                    <td className="border border-slate-600 pl-2 py-1 font-bold">Rol</td>
                    <td className="border border-slate-600 pl-2 py-1 font-bold">Acciones</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-slate-600 pl-2 py-1">Esteban</td>
                    <td className="border border-slate-600 pl-2 py-1">erobert</td>
                    <td className="border border-slate-600 pl-2 py-1">Informatica</td>
                    <td className="border border-slate-600 pl-2 py-1">Administrador</td>
                    <td className="flex justify-start gap-1 border-slate-600 pl-2 py-1">
                        <button className="p-2 rounded-lg bg-green-600 text-white hover:bg-green-400 w-10">M</button>
                        <button className="p-2 rounded-lg bg-red-600 text-white hover:bg-red-400 w-10">E</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
