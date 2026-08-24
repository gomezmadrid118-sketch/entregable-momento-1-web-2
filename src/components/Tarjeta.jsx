import { usuarios } from '../data/usuarios'

const Tarjeta = () => {
  return (
    <>
      {usuarios.map((usuario) => 
        (<div key={usuario.id} className="tarjeta_usuario">
          <h3>{usuario.nombre}</h3>
          <img src={`https://i.pravatar.cc/150?img=${usuario.id}`} alt={usuario.nombre} />
          <p>{usuario.rol}</p>
          <p>{usuario.descripcion}</p>
          <p>Lenguajes:</p>
          <ul>{usuario.lenguajes.map((lenguaje, index) => 
            (<li key={index}>{lenguaje}</li>))}
            </ul>
            </div>))}
    </>
  )
}

export default Tarjeta