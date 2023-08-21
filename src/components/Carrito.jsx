import { useContext } from "react"
import {CartContext} from '../context/CartContext'
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, compraTotal, vaciarCarrito } = useContext(CartContext);
  const handleVaciar = () => {
    vaciarCarrito();
  }
  return (
    <div className='container'>
      <h1 className='main-title'>Carrito</h1>
      <div className="producto-detalle">
        {
          carrito.map((prod)=>(
            <div key={prod.id}>
              <h3 className="titulo">{prod.titulo}</h3>
              <p>Precio Unit: $ {prod.precio}</p>
              <p>Cant: {prod.cantidad}</p>
              <p>Precio total: $ {prod.precio * prod.cantidad}</p>
            </div>
          ))
        }
      </div>
      {carrito.length >0 ? 
        <>
          <h2 className="precio">Total compra: $ {compraTotal()}</h2>
          <button className="vaciar" onClick={handleVaciar}>Vaciar</button>
          <Link to="/checkout" className="vaciar">Finalizar Compra</Link>
        </>:
        <h2>El carrito está vacío. 😔</h2>
      }
    </div>
  )
}

export default Carrito