import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import ListaUsuarios from './components/ListaUsuarios';
import EditarUsuario from "./components/EditarUsuario";
import AgregarUsuario from "./components/AgregarUsuario";

function App() {
  return (
    <BrowserRouter>
      <header className="jumbotron text-center mb-0">
        <h1>Lista de Usuarios</h1>
        <h2>React Routing</h2>
      </header>
      <nav className="navbar navbar-expand bg-dark">
        <ul className="navbar-nav nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
            </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
            <Link to="/Usuarios" className="nav-link">Usuarios</Link>
            </li>
        </ul>
      </nav>
      <main className="container mt-4">
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/About" />
          <Route component={AgregarUsuario} path="/usuario/agregar" />
          <Route component={ListaUsuarios} path="/Usuarios" />
          <Route component={EditarUsuario} path="/usuario/editar/:id"  />
          
        </Switch>
      </main>
    </BrowserRouter>

  );
}

export default App;
