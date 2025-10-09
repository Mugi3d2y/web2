import './App.css'


  interface PageTitleProps {
    title:string
  }

const PageTitle = (props: PageTitleProps) => {
  return (
    <header>
      <h1 className="keyframes">{props.title}</h1>
    </header>
  )
}

  interface MovieProps {
    title:string,
    director:string,
  }
  
  interface CinemaProps {
    name:string,
    movies:MovieProps[],
  }

  const Cinema = (props: CinemaProps) => {
    return (
      <section>
        <h2>{props.name}</h2>
        <ul>
          {props.movies.map((movie) => (
            <li>
              <strong>{movie.title}</strong> - Réalisateur : {movie.director}
            </li>
          ))}
        </ul>
      </section>
    )
  }

  

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";
  const movies1: MovieProps[] = [
      { 
        title:"Film 1 - DeBrouckère",
        director: "Director A",
      },
      {
        title:"Film 2 - DeBrouckère",
        director:"Director B",
}];
  const cinema1 : CinemaProps = {name:"UGC DeBrouckère",movies:movies1};
  const movies2 : MovieProps[] = [
    {
      title:"Film 1 - Toison d'Or",
      director:"Director C",
    },
    {
      title:"Film 2 - Toison d'Or",
      director:"Director D",
    }
  ];
  const cinema2 : CinemaProps = {name:"UGC Toison d'Or",movies:movies2};


  return (
    <div>
      <PageTitle title={pageTitle}/>
      <Cinema name={cinema1.name} movies={cinema1.movies}/>
      <Cinema name={cinema2.name} movies={cinema2.movies}/>
    </div>
  );
};




export default App;
