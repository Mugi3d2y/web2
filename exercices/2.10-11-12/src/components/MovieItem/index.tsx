import type { MovieProps } from '../../../types';
import { useState } from 'react';
import './MovieItem.css';

const MovieItem = ({ title, director, description }: MovieProps) => {
  const [onClick, setOnClick] = useState(false);

  const handleOnClick = () => {
    setOnClick(!onClick);
  };
  return (
    <div className="movie-item">
      <h3 className="movie-title">{title}</h3>
      <p className="movie-director">Réalisateur : {director}</p>
      <button className="movie-description-btn" onClick={handleOnClick}>
        {onClick ? 'Masquer' : 'Afficher'} la description
      </button>
      {onClick && <p className="movie-description">{description}</p>}
    </div>
  );
};

export default MovieItem;
