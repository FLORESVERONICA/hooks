import React from 'react';
import useCustomHook from './hooks/useFecthCharacters';
import './App.css';

const App = () => {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const { data: pokemonData, loading: pokemonLoading, error: pokemonError } = useCustomHook(urlPokemon);
  const { data: rickData, loading: rickLoading, error: rickError } = useCustomHook(urlRick);

  if (pokemonLoading || rickLoading) return <p>Loading...</p>;
  if (pokemonError || rickError)  return <p>Error: {pokemonError?.message|| rickError?. message}</p>;

  
  return (
    <div>
    <h2>Personaje Pokemon</h2>
    <p>{pokemonData.name}</p>
    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />

    <h2>Personaje Rick and Morty</h2>
    <p>{rickData.name}</p>
    <img src={rickData.image} alt={rickData.name}/>
    </div>
  );
};

export default App;
