import { useMatch, useOutletContext } from 'react-router-dom';
import type { MovieContext } from '../../../types';
import "./MovieDetails.css"

const movieDetails = () => {
  const { findMovie }: MovieContext = useOutletContext();
  const match = useMatch('/MovieDetails/:id');
  const matchId = match?.params.id;
  const movie = findMovie(Number(matchId));
  return (
    <div className="film-card">
      <h3 className="film-title">{movie?.title}</h3>
      <p className="film-info">
        <strong>Réalisateur :</strong> {movie?.director}
      </p>
      <p className="film-info">
        <strong>Durée :</strong> {movie?.duration} min
      </p>
      {movie?.imageLink && (
        <p className="film-info">
          <a
            href={movie?.imageLink}
            target="_blank"
            rel="noopener noreferrer"
            className="film-link"
          >
            Aperçu
          </a>
        </p>
      )}
      {movie?.description && (
        <p className="film-description">{movie?.description}</p>
      )}
      {movie?.budget && (
        <p className="film-info">
          <strong>Budget :</strong> ${movie?.budget.toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default movieDetails;
