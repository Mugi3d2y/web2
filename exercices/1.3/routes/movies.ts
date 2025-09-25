import { Router } from "express"
import { Movie } from "../types"


const router = Router();


const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160000000,
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    imageUrl: "https://image.tmdb.org/t/p/inception.jpg"
  },
  {
    id: 2,
    title: "The Matrix",
    director: "The Wachowskis",
    duration: 136,
    budget: 63000000,
    description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    imageUrl: "https://image.tmdb.org/t/p/matrix.jpg"
  },
  {
    id: 3,
    title: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    budget: 11400000,
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    imageUrl: "https://image.tmdb.org/t/p/parasite.jpg"
  }
];

router.get("/",(req, res) => {
    if(!(req.query["minimum-duration"])){
      return res.json(movies);
    }

    const durationMin = Number(req.query["minimum-duration"]);
    const filteredMovies = movies.filter((movie) => movie.duration >= durationMin);

    return res.json(filteredMovies);
});


router.get("/:id", (req, res) => {
  if(!("id" in req.params)){
    return res.sendStatus(400);
  }
  const id = Number(req.params.id);
  const movie = movies.filter((m) => m.id === id);
    return res.json(movie);
});


router.post("/", (req, res) =>{
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    body.duration <= 0 ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body && (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const inputMovie = body as Movie;

  const nextId = movies.length > 0 ? movies.length + 1 : 1;

  const newMovie: Movie = {
    id: nextId,
    title: inputMovie.title,
    director: inputMovie.director,
    duration: inputMovie.duration,
    budget: inputMovie.budget,
    description: inputMovie.description,
    imageUrl: inputMovie.imageUrl
  };

  movies.push(newMovie);
  return res.status(201).json(newMovie);
});

export default router;