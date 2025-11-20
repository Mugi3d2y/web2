import { useNavigate, useOutletContext } from 'react-router-dom';
import './HomePage.css';
import type { MovieContext } from '../../../types';
import MovieDetails from '../pages/MovieDetails.tsx';

const HomePage = () => {
  const { movies }: MovieContext = useOutletContext();
  
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="home-hero">
        <span className="home-hero-icon">🎬</span>
        <h1>Bienvenue sur iMovies</h1>
      </div>

      <div className="home-description">
        <div className="feature-card">
          <span className="feature-icon">🎥</span>
          <h2>Mes Films Préférés</h2>
          <p>
            Découvrez et gérez votre collection personnelle de films. Ajoutez
            vos titres favoris, consultez les détails et créez votre
            cinémathèque numérique.
          </p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🎞️</span>
          <h2>Cinémas de la Région</h2>
          <p>
            Explorez les cinémas près de chez vous. Trouvez les salles,
            consultez les horaires et planifiez vos sorties cinéma en toute
            simplicité.
          </p>
        </div>
      </div>

      <div className="home-cta">
        <h3>Commencez dès maintenant</h3>
        <ul className="films-list">
          {movies.map((movie) => (
            <button
              onClick={() => navigate(`/MovieDetails/${movie.id}`)}
              className="film-card"
            >
              <h3 className="film-title">{movie.title}</h3>
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};
export { MovieDetails };
export default HomePage;
