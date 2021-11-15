import React from "react";

const pokemonIndexItem = ( {pokemon} ) => (
    <li>{pokemon.name}<img src={pokemon.image_url}/></li>
)

export default pokemonIndexItem; 