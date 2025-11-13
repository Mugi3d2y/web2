import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-hero">
        <span className="home-hero-icon">🎬</span>
        <h1>Bienvenue sur iMovies</h1>
      </div>

      <div className="home-description">
        <div className="feature-card">
          <span className="feature-icon">🎥</span>
          <h2>Mes Films Préférés</h2>
          <p>
            Découvrez et gérez votre collection personnelle de films. 
            Ajoutez vos titres favoris, consultez les détails et créez votre cinémathèque numérique.
          </p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🎞️</span>
          <h2>Cinémas de la Région</h2>
          <p>
            Explorez les cinémas près de chez vous. 
            Trouvez les salles, consultez les horaires et planifiez vos sorties cinéma en toute simplicité.
          </p>
        </div>
      </div>

      <div className="home-cta">
        <h3>Commencez dès maintenant</h3>
        <p>Utilisez le menu de navigation ci-dessus pour explorer toutes les fonctionnalités</p>
      </div>
    </div>
  )
}

export default HomePage