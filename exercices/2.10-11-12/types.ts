interface Film {
    title:string;
    director:string;
    duration:number;
    imageLink?:string | null;
    description?:string | null;
    budget?:number | null;
}


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

export type {CinemaProps, MovieProps, PageTitleProps, Film};