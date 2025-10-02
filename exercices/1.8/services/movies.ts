import path from "node:path";
import { parse, serialize } from "../utils/json";
const jsdonDbPath = path.join(__dirname, "/../data/movies.json");
import { Movie, NewMovie } from "../types";

const defaultMovies: Movie[] = [
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



function readAllMovies(minimumDuration : number): Movie[]{
    const movies = parse(jsdonDbPath,defaultMovies);
    if(!minimumDuration){
        return movies;
    };

    const filteredMovies = movies.filter(movie => movie.duration >= minimumDuration); 

    return filteredMovies;
};


function readOneMovie(id : number): Movie | undefined{
    const movies = parse(jsdonDbPath, defaultMovies);

    const movie = movies.find(movie => movie.id === id);
    return movie;
};

function createOneMovie(newMovie : NewMovie): Movie | undefined{
    const movies = parse(jsdonDbPath, defaultMovies);

    const nextId = movies.length;
    
    const createdMovie = {
        id: nextId,
        ...newMovie,
    };

    const existingMovie: Movie | undefined = movies.find((movie) => movie.title.trim() === createdMovie.title.trim() && movie.director.trim() === createdMovie.director.trim());
    if(existingMovie){
        return undefined;
    };
    
    movies.push(createdMovie);
    serialize(jsdonDbPath,movies);
    return createdMovie;
};


function deleteOneMovie(id: number): Movie | undefined{
    const movies = parse(jsdonDbPath,defaultMovies);
    
    const indexMovie = movies.findIndex(m => m.id === id);
    if(indexMovie === -1){
        return undefined;
    }
    const deletedMovie = movies.splice(indexMovie,1);
    serialize(jsdonDbPath,movies);
    return deletedMovie[0];
};

function updateOneMovie( movieId: number, newMovie: Partial<NewMovie> ) : Movie | undefined{
    const movies = parse(jsdonDbPath,defaultMovies);
    const movie = movies.find(m => m.id === movieId);

    if(!movie){
        return undefined;
    }

    if(newMovie.title !== undefined) movie.title = newMovie.title;
    if(newMovie.director !== undefined) movie.director = newMovie.director;
    if(newMovie.duration !== undefined) movie.duration = newMovie.duration;
    if(newMovie.budget !== undefined) movie.budget = newMovie.budget;
    if(newMovie.description !== undefined) movie.description = newMovie.description;
    if(newMovie.imageUrl !== undefined) movie.imageUrl = newMovie.imageUrl;

    serialize(jsdonDbPath,movies);
    return movie;
};




export {
    readAllMovies,
    readOneMovie,
    createOneMovie,
    deleteOneMovie,
    updateOneMovie
};