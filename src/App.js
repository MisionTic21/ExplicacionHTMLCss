import logo from './media/logo.png';
import './styles/App.css';
import borderCollie from "./media/borderCollie.jpg";
import rhodesian from "./media/rhodesian.jpeg";

function App() {
  return (
    <div className="App">
          <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="perrito" className="logo" />
            </li>
            <li>
                <button className="button mainButton">Nuevo post</button>
            </li>
            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza" type="search" />
                    <i className="fas fa-search button iconoBusqueda"></i>
                </div>
            </li>
            <li>
                <button className="button secondaryButton">Login</button>                
            </li>
            <li>
                <button className="button mainButton">Registro</button>                
            </li>
        </ul>
        
    </header>
    <main>
        <section>
            <h1>Razas de perros</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={borderCollie} alt="Border Collie" />
                    </div>
                    <span className="breedTitle">Border Collie</span>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={rhodesian} alt="Rhodesian" />
                    </div>
                    <span className="breedTitle">Rhodesian</span>
                </li>
            </ul>

        </section>
        <section>
            
        </section>

    </main>
    <footer>

    </footer>
    </div>
  );
}

export default App;
