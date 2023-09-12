const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: '',
        stock: 25,
        description: 'Descripcion Producto 2'
    },
    {
        id: '2',
        name: 'Iphone 13',
        price: 1100,
        category: 'tablet',
        img: '',
        stock: 25,
        description: 'Descripcion Producto 2'
    },
    {
        id: '2',
        name: 'Iphone 13',
        price: 1100,
        category: 'Laptop',
        img: '',
        stock: 25,
        description: 'Descripcion Producto 2'
    },

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}