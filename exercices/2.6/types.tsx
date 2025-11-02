interface MovieProps {
  title: string;
  director: string;
  description:string;
}

interface CinemaProps {
  name: string;
  movies: MovieProps[];
}

interface PageTitleProps {
  title: string;
}

export type {CinemaProps, MovieProps, PageTitleProps};