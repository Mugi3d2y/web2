import { useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import Footer from "../Footer";
import Header from "../Header";
import MoviesPage from "../Movies";
import logo from "../../assets/cinema_background.jpg";
import HomePage from "../Home";
import CinemasPage from "../Cinemas"


const NavBar = () => {
  const navigate = useNavigate();
  return ( 
    <nav>
      <button onClick={() => navigate("/")}>Page d'accueil</button>
      <button onClick={() => navigate("/Cinemas")}>Cinémas</button>
      <button onClick={() => navigate("/Movies")}>Mes films</button>
    </nav>
  )
}

function App() {
  
  return (
    <>
      <Header image={logo}>
        <h1>Bienvenue</h1>
      </Header>
      <NavBar/>
      <Outlet/>
      <Footer title="© 2024 - Tous droits réservés">
        <p>Merci de votre visite !</p>
      </Footer>
    </>
  )
}


export { HomePage, CinemasPage, MoviesPage }
export default App
