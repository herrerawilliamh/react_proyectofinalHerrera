import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const CheckOut = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, compraTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit} = useForm();
    const comprar = (data) =>{
    const pedido = {
        cliente: data,
        carrito: carrito,
        total: compraTotal()
    }
    console.log(pedido);
    const pedidosRef = collection(db, "pedidos")
    addDoc(pedidosRef, pedido)
    .then((doc)=>{
        setPedidoId(doc.id)
        vaciarCarrito()
    })
  }
  if(pedidoId){
    return (
        <div className="container">
            <h1 className='main-title'>Gracias por su compra</h1>
            <p>Tu número de pedido es {pedidoId}</p>
        </div>
    )
  }
  return (
    <div className="container">
      <h1 className="main-title">Finalizar compra</h1>
      <form className='formulario' onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder='Ingresa tu nombre...' {...register("nombre")}/>
        <input type="email" placeholder='Ingresa tu e-mail' {...register("email")}/>
        <input type="phone" placeholder="Ingresa tu teléfono..." {...register("telefono")}/>
        <button className='enviar' type='submit'>Comprar</button>
      </form>
    </div>
  )
}

export default CheckOut