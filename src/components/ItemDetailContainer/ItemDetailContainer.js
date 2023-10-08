import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../Services/firebase'

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)
    const [loader, setLoeader] =useState(false)
    const { itemId } = useParams()

    // useEffect(() => {
    //     getProductsById(itemId)
    //     .then(response => {
    //         setProducts(response)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
    // }, [itemId])
    useEffect(()=>{
        setLoeader(true)
        const collectionProd = collection(db, "productos")
        const referenciaAlDoc = doc(collectionProd, itemId)
        getDoc(referenciaAlDoc)
        .then((res)=> setProducts({id:res.id, ...res.data()}))
        .catch((error)=> console.log(error))
        .finally(()=> setLoeader(false))
    },[])
    
    return(
        <div className='listDetail' >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer