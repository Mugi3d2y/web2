import { useEffect, useState } from 'react'
import './App.css'
import type { Joke } from "../types.ts"




function App() { 

  

  const [joke, setJoke] = useState<Joke|undefined>(undefined);
  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((response) => {
      if(!response.ok) throw new Error( `fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    }).then((joke) => setJoke({
      category: joke?.category,
      delivery: joke?.joke,
    }))
    .catch((err) => {
      console.log("API::error: ", err);
    })
  },[]);
  return (
    <>
      <h2>{joke?.category}</h2>
      <ul>
        <li>{joke?.delivery}</li>
      </ul>
    </>
  )
}

export default App
