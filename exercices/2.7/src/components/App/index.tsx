import { useState } from 'react'
import type { SyntheticEvent } from 'react'
import './App.css'
import type { Film } from "../../../types"

const defaultFilms: Film[] = [
    { title: 'Inception', director: 'Christopher Nolan', duration: 148 },
    { title: 'The Matrix', director: 'The Wachowskis', duration: 136 },
    { title: 'Interstellar', director: 'Christopher Nolan', duration: 169 },
    { title: 'The Shawshank Redemption', director: 'Frank Darabont', duration: 142 },
    { title: 'Pulp Fiction', director: 'Quentin Tarantino', duration: 154 },
  ];


function App() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [imageLink, setImageLink] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [films,setFilms] = useState(defaultFilms);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('submit:',title, director, duration, imageLink!==""?imageLink:null,description!==""?description:null,budget!==0?budget:null);
    const newFilm : Film = {
      title: title,
      director: director,
      duration: duration,
      imageLink: imageLink!==""?imageLink:null,
      description: description!==""?description:null,
      budget: budget!==0?budget:null,
    };
    setFilms([...defaultFilms,newFilm]);
  };

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", titleInput.value);
    setTitle(titleInput.value);
  }

  const handleDirectorChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    setDirector(descriptionInput.value);
  }

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    const parsed = Number(durationInput.value);
    const safe = Number.isNaN(parsed) ? 0 : parsed;
    console.log("change in durationInput:", durationInput.value, "parsed:", safe);
    setDuration(safe);
  }

  return (
    <>
      <ul>
        {films.map((film,index) => <li key={index}>{film.title} - Réalisteur : {film.director} durée : {film.duration}</li>)}
      </ul>
    </>
  )
}

export default App
