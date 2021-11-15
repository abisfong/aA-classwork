import React from "react";
import { Link } from "react-router-dom";

const pokemonIndexItem = ( {pokemon} ) => (
  <li className="pokemon-index-item">
    <Link to= {"/pokemon/" + `${pokemon.id}`}>
    {pokemon.name}
    <img src={pokemon.imageUrl}/>
    </Link>
  </li>
)

export default pokemonIndexItem; 