import type { MovieContext } from '../../../types';
import './Movies.css';
import { useOutletContext } from 'react-router-dom';

const MoviesPage = () => {
  const { movies }: MovieContext = useOutletContext();
  
  return (
    <div className="app-container">
      <header>
        <h1 className="keyframes"> Collection de films </h1>
      </header>
      <div className="content-wrapper">
        <div className="films-section">
          <h2 className="section-title">🎬 Ma Collection</h2>
          <ul className="films-list">
            {movies.map((movie, index) => (
              <li key={index} className="film-card">
                <h3 className="film-title">{movie.title}</h3>
                <p className="film-info">
                  <strong>Réalisateur :</strong> {movie.director}
                </p>
                <p className="film-info">
                  <strong>Durée :</strong> {movie.duration} min
                </p>
                {movie.imageLink && (
                  <p className="film-info">
                    <a
                      href={movie.imageLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="film-link"
                    >
                      Aperçu
                    </a>
                  </p>
                )}
                {movie.description && (
                  <p className="film-description">{movie.description}</p>
                )}
                {movie.budget && (
                  <p className="film-info">
                    <strong>Budget :</strong> ${movie.budget.toLocaleString()}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
