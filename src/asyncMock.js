const products = [
    {
        id: '1',
        name: 'Cartel Neon ABC',
        price: 1000,
        category: 'cartelesNeonMadera',
        img: '../assets/neonAbc.png',
        stock: 25,
        description: 'Descripcion Neon Madera ABC',
    },
    {
        id: '2',
        name: 'Cartel Neon Helado',
        price: 1000,
        category: 'cartelesNeonMadera',
        img: '../assets/neonHelado.png',
        stock: 25,
        description: 'Descripcion Neon Madera Helado',
    },
    {
        id: '3',
        name: 'Guirnaldas 10 Metros',
        price: 1100,
        category: 'Guirnaldas',
        img: '../assets/guirnaldas.png',
        stock: 25,
        description: 'Descripcion Guirnaldas 10 Metros',
    },
    {
        id: '4',
        name: 'Guirnaldas 20 Metros',
        price: 2200,
        category: 'Guirnaldas',
        img: '../assets/guirnaldas.png',
        stock: 25,
        description: 'Descripcion Guirnaldas 20 Metros',
    },
    {
        id: '5',
        name: 'Cartel Neon Games',
        price: 1000,
        category: 'cartelesNeonAcrilico',
        img: '../assets/neonGames.png',
        stock: 25,
        description: 'Descripcion Neon GAMES Acrilico',
    },
    {
        id: '6',
        name: 'Cartel Neon Flechas',
        price: 1000,
        category: 'cartelesNeonAcrilico',
        img: '../assets/neonFlechas.png',
        stock: 25,
        description: 'Descripcion Neon Flechas Acrilico',
    },
    {
        id: '7',
        name: 'Cartel Neon Love',
        price: 1000,
        category: 'cartelesNeonAcrilico',
        img: '../assets/neonILY.png',
        stock: 25,
        description: 'Descripcion Neon Love Acrilico',
    },
    {
        id: '8',
        name: 'Cartel Neon Smile',
        price: 1000,
        category: 'cartelesNeonAcrilico',
        img: '../assets/neonSmile.png',
        stock: 25,
        description: 'Descripcion Neon Love Acrilico',
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

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },2000)
    })
}