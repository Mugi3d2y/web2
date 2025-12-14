import Router from "express";
import {
    readAllFilms,
    readOneFilm
} from "../services/films";

const router = Router();

router.get("/", (_req, res) => {
    const films = readAllFilms();
    return res.json(films);
});


router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const film = readOneFilm(id);
    return res.json(film);
});


export default router;