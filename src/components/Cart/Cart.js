import './Cart.css'
import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem.js'
import { Link } from 'react-router-dom'


const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)
    return (
        <div>
            {cart.length
            ? <div>
                {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
                <p>Total a Pagar: ${total()}</p>
                <div>
                    <button className='btn btn-danger' onClick={clearCart} >Vaciar Carrito</button>
                    <Link className='btn btn-dark' to='/checkout'> Terminar compra</Link>
                </div>
              </div>
        :   <div>
                <h1>EL CARRITO ESTA VACÍO</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>}
    </div>
    )
}
        

//     return (
//         <div>
//             { cart.map(item => <CartItem key={item.id} {...item}/>) }
//             <h3>Total: ${total}</h3>
//             <button onClick={() => clearCart()} className='Button'>Limpiar Carrito</button>
//             <Link to='/checkout' className='Option'>Proceder al Pago</Link>
//         </div>
//     )
// }

export default Cart