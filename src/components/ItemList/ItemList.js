import './ItemList.css'
import Item from '../Item/Item.js'

const ItemList = ({products }) => {
    return(
        <ul className='cardList'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    )
}

export default ItemList