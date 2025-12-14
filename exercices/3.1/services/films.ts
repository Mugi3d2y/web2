import path from "node:path";
import { parse /*, serialize*/ } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");



const defaultFilms = [
    {
        id: 1,
        title: "Fast & Furious",
        director: "Vin Diesel",
    }
];

const readAllFilms = () => {
    const films = parse(jsonDbPath,defaultFilms);
    return films;
};


const readOneFilm = (id: number) => {
    const films = parse(jsonDbPath, defaultFilms);

    const film = films.filter(f => f.id === id);

    if(!film) return undefined;
    return film;
};


export { readAllFilms, readOneFilm };