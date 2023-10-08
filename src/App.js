import './App.css';
import  NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart.js'
import React, {useEffect} from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from './Services/firebase'
import {products} from './asyncMock'
import Checkout from './components/Checkout/Checkout'

function App() {
  // useEffect(()=>{
  //   const colectionProductos = collection(db, "productos")
  //   products.map((item)=> addDoc(colectionProductos, item))
  // },[])
  
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Link to='/'><img className='LogoR' src="../assets/LogoR.png" alt="imagelogo" /></Link>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer  greeting={"Toda la iluminacion para tus espacios en un solo lugar"}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>} />
              <Route path='/Checkout' element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;