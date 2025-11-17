import { useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import Footer from '../Footer';
import Header from '../Header';
import MoviesPage from '../Movies';
import logo from '../../assets/cinema_background.jpg';
import HomePage from '../Home';
import CinemasPage from '../Cinemas';
import AddMoviePage from '../pages/AddMoviePage.tsx';
import type { MovieContext, MovieProps } from '../../../types.ts';
import { useState } from 'react';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate('/')}>Page d'accueil</button>
      <button onClick={() => navigate('/Cinemas')}>Cinémas</button>
      <button onClick={() => navigate('/Movies')}>Mes films</button>
      <button onClick={() => navigate('/AddMovie')}>Ajouter un Film</button>
    </nav>
  );
};

const defaultFilms: MovieProps[] = [
  { title: 'Inception', director: 'Christopher Nolan', duration: 148 },
  { title: 'The Matrix', director: 'The Wachowskis', duration: 136 },
  { title: 'Interstellar', director: 'Christopher Nolan', duration: 169 },
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    duration: 142,
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    duration: 154,
    description:
      'Un film culte qui entrelace plusieurs histoires de crime à Los Angeles.',
    budget: 8000000,
  },
];

function App() {
  const [movies, setMovies] = useState(defaultFilms);

  const addMovie = (newMovie: MovieProps) => {
    setMovies([...movies, newMovie]);
  };

  const fullMoviePage: MovieContext = {
    addMovie,
    setMovies,
    movies,
  };
  return (
    <>
      <Header image={logo}>
        <h1>Bienvenue</h1>
      </Header>
      <NavBar />
      <Outlet context={fullMoviePage} />
      <Footer title="© 2024 - Tous droits réservés">
        <p>Merci de votre visite !</p>
      </Footer>
    </>
  );
}

export { HomePage, CinemasPage, MoviesPage, AddMoviePage };
export default App;
