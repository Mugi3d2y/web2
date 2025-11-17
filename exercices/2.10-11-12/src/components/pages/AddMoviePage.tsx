import { useNavigate, useOutletContext } from 'react-router-dom';
import type { MovieContext, MovieProps } from '../../../types';
import { useState, type SyntheticEvent } from 'react';



const AddMoviePage = () => {
  const { addMovie }: MovieContext = useOutletContext();

  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [duration, setDuration] = useState(0);
  const [imageLink, setImageLink] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(
      'submit:',
      title,
      director,
      duration,
      imageLink !== '' ? imageLink : undefined,
      description !== '' ? description : undefined,
      budget !== 0 ? budget : undefined,
    );
    const newMovie: MovieProps = {
      title: title,
      director: director,
      duration: duration,
      imageLink: imageLink !== '' ? imageLink : undefined,
      description: description !== '' ? description : undefined,
      budget: budget !== 0 ? budget : undefined,
    };
    addMovie(newMovie);
    // Reset form
    setTitle('');
    setDirector('');
    setDuration(0);
    setImageLink('');
    setDescription('');
    setBudget(0);
    navigate('/');
  };

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    //console.log("change in pizzaInput:", titleInput.value);
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    //console.log("change in descriptionInput:", descriptionInput.value);
    setDirector(descriptionInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    const parsed = Number(durationInput.value);
    const safe = Number.isNaN(parsed) ? 0 : parsed;
    console.log(
      'change in durationInput:',
      durationInput.value,
      'parsed:',
      safe,
    );
    setDuration(safe);
  };

  const handleImageLinkChange = (e: SyntheticEvent) => {
    const linkImgInput = e.target as HTMLInputElement;
    //console.log("change in durationInput:",linkImgInput.value);
    setImageLink(linkImgInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLTextAreaElement;
    //console.log("change in descriptionInput:",descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    const parsedBudgetInput = Number(budgetInput.value);
    const safe = isNaN(parsedBudgetInput) ? 0 : parsedBudgetInput;
    //console.log("change in descriptionInput:", budgetInput, "change in safe:", safe);
    setBudget(safe);
  };

  return (<div className="form-section">
    <h2 className="section-title">➕ Ajouter un Film</h2>
    <div className="film-form">
      <form className="film-content" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="film" className="form-label">
            Titre du Film
          </label>
          <input
            type="text"
            name="film"
            id="film"
            className="form-input"
            onChange={handleTitleChange}
            value={title}
            placeholder="Ex: Blade Runner"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="director" className="form-label">
            Réalisateur
          </label>
          <input
            type="text"
            name="director"
            id="director"
            className="form-input"
            onChange={handleDirectorChange}
            value={director}
            placeholder="Ex: Ridley Scott"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration" className="form-label">
            Durée (minutes)
          </label>
          <input
            type="number"
            name="duration"
            id="duration"
            className="form-input"
            onChange={handleDurationChange}
            value={duration || ''}
            placeholder="Ex: 117"
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="link" className="form-label">
            Lien vers l'affiche
          </label>
          <input
            type="url"
            name="link"
            id="link"
            className="form-input"
            onChange={handleImageLinkChange}
            value={imageLink}
            placeholder="Ex: https://example.com/poster.jpg"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="form-input form-textarea"
            onChange={handleDescriptionChange}
            value={description}
            placeholder="Ex: Un film de science-fiction dystopique..."
            rows={4}
          />
        </div>

        <div className="form-group">
          <label htmlFor="budget" className="form-label">
            Budget en $
          </label>
          <input
            type="number"
            name="budget"
            id="budget"
            className="form-input"
            onChange={handleBudgetChange}
            value={budget || ''}
            placeholder="Ex: 28000000"
            min="0"
          />
        </div>

        <button type="submit" className="submit-btn">
          ⚡ AJOUTER ⚡
        </button>
      </form>
    </div>
  </div>
  )
};


export default AddMoviePage;