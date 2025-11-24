import { useEffect, useState } from 'react'
import './App.css'
import type { Joke } from "../types.ts"

const defaultJokes: Joke[] = [];


function App() { 


  const addJoke = (joke: Joke) => {
    setJokes([...jokes,joke]);
  }
  const [jokes, setJokes] = useState(defaultJokes);
  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?lang=fr&idRange=0")
    .then((response) => {
      if(!response.ok) throw new Error( `fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    }).then((jokes) => {jokes.map((j:Joke)=>addJoke(j))})
    .catch((err) => {
      console.log("API::error: ", err);
    })
  })
  return (
    <>
    <h2>azegazer</h2>
      <ul>
        {jokes.map(joke => <li>{joke.delivery} -- {joke.status}</li>)}
      </ul>
    </>
  )
}

export default App
