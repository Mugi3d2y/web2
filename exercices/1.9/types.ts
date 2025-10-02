interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string ;
}


interface Text {
  id: string;
  content: string;
  level: "easy" | "medium" | "hard";
}


type NewMovie = Omit<Movie, "id">;

export type { Movie, NewMovie, Text };