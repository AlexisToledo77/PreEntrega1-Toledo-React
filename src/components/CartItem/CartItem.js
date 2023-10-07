import React from 'react'

const CartItem = ({p}) => {
    return (
        <div>
            <img scr={p.img} alt={p.name}/>
            <p>{p.name}</p>
        </div>
    )
}

export default CartItem