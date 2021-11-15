import React from "react";

const pokemonIndexItem = ( {pokemon} ) => (
  <li className="pokemon-index-item">
    {pokemon.name}
    <img src={pokemon.imageUrl}/>
  </li>
)

export default pokemonIndexItem; 