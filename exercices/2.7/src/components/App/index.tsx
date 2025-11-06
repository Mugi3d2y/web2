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
    console.log('submit:',title, director, duration, imageLink!==""?imageLink:undefined,description!==""?description:undefined,budget!==0?budget:undefined);
    const newFilm : Film = {
      title: title,
      director: director,
      duration: duration,
      imageLink: imageLink!==""?imageLink:undefined,
      description: description!==""?description:undefined,
      budget: budget!==0?budget:undefined,
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

  const handleImageLinkChange = (e: SyntheticEvent) => {
    const linkImgInput = e.target as HTMLInputElement;
    console.log("change in durationInput:",linkImgInput.value);
    setImageLink(linkImgInput.value);
  
  }

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:",descriptionInput.value);
    setDescription(descriptionInput.value);
  }

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    const parsedBudgetInput = Number(budgetInput.value);
    const safe = isNaN(parsedBudgetInput)?0:parsedBudgetInput;
    console.log("change in descriptionInput:", budgetInput, "change in safe:", safe);
    setBudget(safe);
  }

  return (
    <div className="app-container">
      <div className="films-section">
        <h2 className="section-title">🎬 Liste des Films</h2>
        <ul className="films-list">
          {films.map((film,index) => <li key={index} className="film-card">{film.title} - Réalisteur : {film.director} - 
            Durée : {film.duration}
            {film.imageLink === undefined? "" : ` Lien vers image : ${film.imageLink}`} 
            {film.description === undefined ? "" : ` - Description : ${film.description}`} 
            {film.budget === undefined ? "" : ` - Budget : ${film.budget}`}
          </li>)}
        </ul>
      </div>
      
      <div className='form-section'>
        <h2 className="section-title">➕ Ajouter un Film</h2>
        <div className='film-form'>
          <form className='film-content' onSubmit={handleSubmit}>
            <label htmlFor="film" className="form-label">Film : </label>
            <input type="text" name="film" id="film" className="form-input" onChange={handleTitleChange} /> <br />
            <label htmlFor="director" className="form-label">Auteur : </label>
            <input type="text" name='director' id='director' className="form-input" onChange={handleDirectorChange}/><br />
            <label htmlFor="duration" className="form-label"> Durée : </label>
            <input type="text" name='duration' id='duration' className="form-input" onChange={handleDurationChange}/> <br />
            <label htmlFor="link" className="form-label"> Lien vers image : </label>
            <input type="text" name='link' id='link' className="form-input" onChange={handleImageLinkChange} /><br />
            <label htmlFor="description" className="form-label"> Description : </label>
            <input type="text" name='description' id='description' className="form-input" onChange={handleDescriptionChange} /><br />
            <label htmlFor="budget" className="form-label">Budget : </label>
            <input type="number" name='budget' id='budget' className="form-input" onChange={handleBudgetChange} /><br />
            <button type='submit' className="submit-btn"> Ajouter </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
