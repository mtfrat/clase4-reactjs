import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ComponenteContainer/ItemListContainer';

function App() {
  let titulo = 'Soy el componente container'
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo={titulo}  />
    </div>
  );
}

export default App;
