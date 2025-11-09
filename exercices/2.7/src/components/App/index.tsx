import { useState } from 'react'
import type { SyntheticEvent } from 'react'
import './App.css'
import type { Film } from "../../../types"

const defaultFilms: Film[] = [
    { title: 'Inception', director: 'Christopher Nolan', duration: 148 },
    { title: 'The Matrix', director: 'The Wachowskis', duration: 136 },
    { title: 'Interstellar', director: 'Christopher Nolan', duration: 169 },
    { title: 'The Shawshank Redemption', director: 'Frank Darabont', duration: 142 },
    { title: 'Pulp Fiction', director: 'Quentin Tarantino', duration: 154, description: "Un film culte qui entrelace plusieurs histoires de crime à Los Angeles.", budget: 8000000 },
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
    setFilms([...films,newFilm]);
    // Reset form
    setTitle("");
    setDirector("");
    setDuration(0);
    setImageLink("");
    setDescription("");
    setBudget(0);
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
    const descriptionInput = e.target as HTMLTextAreaElement;
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
      <h1 className="main-title">🎥 CinéThèque</h1>
      
      <div className="content-wrapper">
        <div className="films-section">
          <h2 className="section-title">🎬 Ma Collection</h2>
          <ul className="films-list">
            {films.map((film, index) => (
              <li key={index} className="film-card">
                <h3 className="film-title">{film.title}</h3>
                <p className="film-info"><strong>Réalisateur :</strong> {film.director}</p>
                <p className="film-info"><strong>Durée :</strong> {film.duration} min</p>
                {film.imageLink && (
                  <p className="film-info">
                    <a href={film.imageLink} target="_blank" rel="noopener noreferrer" className="film-link">
                      🖼️ Voir l'affiche
                    </a>
                  </p>
                )}
                {film.description && (
                  <p className="film-description">{film.description}</p>
                )}
                {film.budget && (
                  <p className="film-info"><strong>Budget :</strong> ${film.budget.toLocaleString()}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        <div className='form-section'>
          <h2 className="section-title">➕ Ajouter un Film</h2>
          <div className='film-form'>
            <form className='film-content' onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="film" className="form-label">Titre du Film</label>
                <input 
                  type="text" 
                  name="film" 
                  id="film" 
                  className="form-input" 
                  onChange={handleTitleChange}
                  value={title}
                  placeholder="Ex: Le Parrain"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="director" className="form-label">Réalisateur</label>
                <input 
                  type="text" 
                  name='director' 
                  id='director' 
                  className="form-input" 
                  onChange={handleDirectorChange}
                  value={director}
                  placeholder="Ex: Francis Ford Coppola"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="duration" className="form-label">Durée (minutes)</label>
                <input 
                  type="number" 
                  name='duration' 
                  id='duration' 
                  className="form-input" 
                  onChange={handleDurationChange}
                  value={duration || ''}
                  placeholder="Ex: 175"
                  min="1"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="link" className="form-label">Lien vers l'affiche (optionnel)</label>
                <input 
                  type="url" 
                  name='link' 
                  id='link' 
                  className="form-input" 
                  onChange={handleImageLinkChange}
                  value={imageLink}
                  placeholder="Ex: https://example.com/poster.jpg"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">Description (optionnel)</label>
                <textarea 
                  name='description' 
                  id='description' 
                  className="form-input form-textarea" 
                  onChange={handleDescriptionChange}
                  value={description}
                  placeholder="Ex: Un chef-d'œuvre du cinéma qui raconte l'histoire de la famille Corleone..."
                  rows={4}
                />
              </div>

              <div className="form-group">
                <label htmlFor="budget" className="form-label">Budget en $ (optionnel)</label>
                <input 
                  type="number" 
                  name='budget' 
                  id='budget' 
                  className="form-input" 
                  onChange={handleBudgetChange}
                  value={budget || ''}
                  placeholder="Ex: 6000000"
                  min="0"
                />
              </div>

              <button type='submit' className="submit-btn">
                ✨ Ajouter à ma collection
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
