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

router.get("/",(_req, res) => {
    return res.json(movies);
})



export default router;