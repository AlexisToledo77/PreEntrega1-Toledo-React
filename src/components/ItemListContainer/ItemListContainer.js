import { useState, useEffect } from 'react'
import { getProducts , getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList.js'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../Services/firebase'

const ItemListContainer = ({ greeting }) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(false)
    const { categoryId } = useParams()

    // useEffect(() => {
    //     const asyncFunc = categoryId ? getProductsByCategory : getProducts

    //     asyncFunc(categoryId)
    //         .then(response => {
    //             setProducts(response)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }, [categoryId])

    useEffect(()=>{
        setLoading(true)
        const coleccionProductos = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)):collection(db, "productos")
        getDocs(coleccionProductos)
        .then((res)=> {
            const list = res.docs.map((product)=>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })
            setProducts(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])

    return (
        <div>
            <h1 className="list">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;