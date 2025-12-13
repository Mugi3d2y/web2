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
import { useState, useEffect } from 'react';

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



function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    getAllMovies();
  },[])

  const getAllMovies = async () => {
    try {
      const response = await fetch("/api/movies");
      if(!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`  
        )
        const theMovies = await response.json();
        setMovies(theMovies);
        return theMovies;
    } catch (err) {
      console.error("MoviesPage::error: ", err);
    }
  }

  const addMovie = async (newMovie: MovieProps) => {
    try{
      const options = {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("/api/movies",options);
      if(!response.ok)
        throw new Error(
          `fetch error ${response.status} : ${response.statusText}`
      )
      const createdMovie = await response.json();
      setMovies([...movies, createdMovie]);
      return createdMovie;
    } catch (err){
      console.error("AddMoviePage::error: ", err);
      
    }
  };
  
const deleteMovie = async (movie: MovieProps): Promise<void> => {
    try{
      const options = {
      method: "DELETE"
    };
    const response = await fetch(`/api/movies/${movie.id}`,options);

    if(!response.ok)
      throw new Error(
        `fetch error : ${response.status} : ${response.statusText}`
    )
    } catch (err){
      console.log("HomePage::error: ", err);
    }

    try {
      console.log("Movie deleted : ", movie);
      await getAllMovies();
    } catch(err){
      console.log("HomePage::error: ", err);
    }

  };

  const findMovie = (id: number) => {
    return movies.find((m) => m.id === id);
  };

  

  const fullMoviePage: MovieContext = {
    addMovie,
    setMovies,
    findMovie,
    deleteMovie,
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
