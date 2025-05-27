import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = ()=>{
    fetch(API)
    .then((res)=> res.json())
    .then((data)=>{
      setPokemon(data);
      setLoading(false);
    })
    .catch((error)=>{
      setError(error);
      setLoading(false);
    })
  }

  useEffect(()=>{
    fetchPokemon();
  }, []);

  if(loading){
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if(error){
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    )
  }
  console.log(pokemon.sprites.other.dream_world.front_default);
  return (
    <section className='container'>
      <header>
        <h1>Lets Catch Pokemon</h1>
      </header>
      <ul className='card-demo'>
        <li className='pokemon-card'>
          <figure>
          <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className='pokemon-image' />
          </figure>
          <h1>{pokemon.name}</h1>
          <div>
            <p className="pokemon-info">
              Height: <span> {pokemon.height} </span>
            </p>
            <p className="pokemon-info">
              Weight: <span> {pokemon.weight} </span>
            </p>
            <p className="pokemon-info">
              speed: <span> {pokemon.stats[5].base_stat} </span>
            </p>
          </div> 
        </li>
      </ul>
    </section>
  )
}

export default App
