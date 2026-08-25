import './Tarjeta.css'
import { usuarios } from '../data/usuarios'

const Tarjeta = () => {
  return (
    <div className="tarjetas_contenedor">
      {usuarios.map((usuario) => (
        <div key={usuario.id} className="tarjeta_usuario">
          <img
            src={`https://i.pravatar.cc/150?img=${usuario.id}`}
            alt={usuario.nombre}
            className="tarjeta_imagen"
          />
          <h3>{usuario.nombre}</h3>
          <p className="tarjeta_rol">{usuario.rol}</p>
          <p className="tarjeta_descripcion">{usuario.descripcion}</p>
          <p className="tarjeta_titulo_lenguajes">Lenguajes:</p>
          <ul className="tarjeta_lenguajes">
            {usuario.lenguajes.map((lenguaje, index) => (
              <li key={index}>{lenguaje}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Tarjeta