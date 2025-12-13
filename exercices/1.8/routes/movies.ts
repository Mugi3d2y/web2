import { Router } from "express";
import { Movie } from "../types";
import {
  readAllMovies,
  readOneMovie,
  createOneMovie,
  deleteOneMovie,
  updateOneMovie
} from "../services/movies"
const router = Router();




router.get("/",(req, res) => {
    const movies = readAllMovies(Number(req.query["minimum-duration"]));

    return res.json(movies);
});


router.get("/:id", (req, res) => {
  const movie = readOneMovie(Number(req.params.id));
  if (!movie) return res.sendStatus(400);

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

  const movie = createOneMovie(inputMovie);
  console.log("The movie which has been created is : ", movie);
  
  if(!movie){
    return res.sendStatus(409);
  }
  return res.status(200).json(movie);
});

router.delete("/:id",(req,res) =>{
  const id = Number(req.params.id);
  if(isNaN(id)) return res.sendStatus(400);

  const deletedMovie = deleteOneMovie(id);

  if(!deletedMovie){
    return res.sendStatus(400);
  };

  return res.json(deletedMovie);

});

router.patch("/:id",(req,res) => {
  const id = Number(req.params.id);
  if(isNaN(id)) return res.sendStatus(400);
  const body:unknown = req.body;
  if(
    !body ||
    typeof body !== "object" ||
    ("title" in body && 
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body && 
            (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body && 
      (typeof body.duration !== "number" || body.duration <= 0))

  ){
    return res.sendStatus(400);
  }
  const inputMovie = body as Movie;
  const updatedMovie = updateOneMovie(id,inputMovie);

  
  return res.json(updatedMovie);
});

export default router;