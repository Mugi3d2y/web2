interface MovieProps {
  title: string;
  director: string;
  duration: number;
  imageLink?: string | null;
  description?: string | null;
  budget?: number | null;
}

interface CinemaProps {
  name: string;
  movies: MovieProps[];
}

interface PageTitleProps {
  title: string;
}

interface MovieContext {
  addMovie: (newMovie: MovieProps) => void;
  setMovies: (movies: MovieProps[]) => void;
  movies: MovieProps[];
}

export type { CinemaProps, MovieProps, PageTitleProps, MovieContext };
