import './App.css';
import  NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer  greeting={"Toda la iluminacion para tus espacios en un solo lugar"}/>
    </div>
  );
}

export default App;
