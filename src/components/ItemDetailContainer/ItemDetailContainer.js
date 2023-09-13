import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductsById('itemId')
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])
    
    return(
        <div className='listDetail' >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer