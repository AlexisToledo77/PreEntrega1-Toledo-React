import './App.css';
import  NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemCount from './components/ItemCount/ItemCount.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemListContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//<ItemListContainer  greeting={"Toda la iluminacion para tus espacios en un solo lugar"}/>
//<ItemDetailContainer/>
//<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada " ,quantity)}/>
