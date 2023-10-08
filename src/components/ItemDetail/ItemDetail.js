import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        
        const item = {
            id, name, price, img
        }

        addItem(item,quantity)
    }

    return (
        <article className="cardDetail">
            <header className='header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className="info">
                    Categoria: {category}
                </p>
                <p className="info">
                    Descripcion: {description}
                </p>
                <p className="info">
                    Precio: ${price}
                </p>
                <button Link to='/'> Seguir comprando</button>
            </section>
            <footer className='ItemFooter'>{
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Finalizar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={(handleOnAdd)}/>
                    )
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail