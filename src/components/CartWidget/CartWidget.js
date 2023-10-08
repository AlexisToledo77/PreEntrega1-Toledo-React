import './CartWidget.css'
import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Badge } from 'bootstrap-4-react'
import { CartContext } from '../../context/CartContext' 
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext)
  
    return (
      <div>
        <Link to="/cart">
          <BsCart4 fontSize={'2rem'} color="black" />
        </Link>
        {cartQuantity() > 0 && (
          <Badge bg='danger'>{cartQuantity()}</Badge>
        )}
      </div>
    )
  }


export default CartWidget