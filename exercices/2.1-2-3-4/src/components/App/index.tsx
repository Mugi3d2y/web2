import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import logo from "../../assets/cinema_background.jpg";

interface PageTitleProps {
  title: string;
}

const PageTitle = (props: PageTitleProps) => {
  return (
    <header>
      <h1 className="keyframes">{props.title}</h1>
    </header>
  )
};

interface MovieProps {
  title: string;
  director: string;
}

interface CinemaProps {
  name: string;
  movies: MovieProps[];
}

const Cinema = (props: CinemaProps) => {
  return (
    <section>
      <h2>{props.name}</h2>
      <ul>
        {props.movies.map((movie, index) => (
          <li key={index}>
            <strong>{movie.title}</strong> - Réalisateur : {movie.director}
          </li>
        ))}
      </ul>
    </section>
  )
};

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";
  const movies1: MovieProps[] = [
    {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  },
  {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
  },
  {
    title: "INCEPTION",
    director: "Christopher Nolan",
  },
  {
    title: "PARASITE",
    director: "Bong Joon-ho",
  },
  ];
  const cinema1: CinemaProps = { name: "UGC DeBrouckère", movies: movies1 };
  const movies2: MovieProps[] = [
    {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  },
  {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  },
  {
    title: "TENET",
    director: "Christopher Nolan",
  },
  {
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
  },
  ];
  const cinema2: CinemaProps = { name: "UGC Toison d'Or", movies: movies2 };

  return (
    <div>
      <Header image={logo}>
      <h1>Bienvenue</h1>
      </Header>
      <PageTitle title={pageTitle} />
      <Cinema name={cinema1.name} movies={cinema1.movies} />
      <Cinema name={cinema2.name} movies={cinema2.movies} />
      <Footer title="© 2024 - Tous droits réservés">
        <p>Merci de votre visite !</p>
      </Footer>
    </div>
  )
};

export default App;
