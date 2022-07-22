import { useNavigate } from 'react-router-dom'


const Cliente = ({ cliente, handleEliminar }) => {
  const {nombre, empresa, email, telefono, notas, id} = cliente
  const navigate = useNavigate()

  return (
    <tr className="border-b hover:bg-gray-500">
      <td className="pd-3 border-r">{nombre}</td>
      <td className="pd-3 border-r">
        <p><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
        <p><span className="text-gray-800 uppercase font-bold">Teléfono: </span>{telefono}</p>
      </td>
      <td className="pd-3 border-r">{empresa}</td>
      <td className="pd-3 border-r">
      <button 
        type="button"
        className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
        onClick={() => navigate(`/${id}`)}
        >
          Ver
        </button>
        <button 
        type="button"
        className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
        onClick={() => navigate(`/editar/${id}`)}
        >
          Editar
        </button>
        <button type="button"
        className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
        onClick={() => handleEliminar(id)}

        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Cliente