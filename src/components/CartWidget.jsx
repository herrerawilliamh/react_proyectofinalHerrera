import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {
  const {cantidadEnCarrito} = useContext(CartContext);
  return (
    <div>
        <li className="carrito">
            <Link to="/carrito" className="carrito-menu-linkE">
              <i className="bi bi-cart3"></i> 
              &nbsp;Carrito
              <span className="numero">{cantidadEnCarrito()} </span>
            </Link>
        </li>
    </div>
  )
}

export default CartWidget