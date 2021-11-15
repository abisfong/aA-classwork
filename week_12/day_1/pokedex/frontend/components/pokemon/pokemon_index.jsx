import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    const pokemonItems = this.props.pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));
    return (
      <section className="pokedex">
        <ul>{pokemonItems}</ul>
      </section>
    )
  }
}
  
  
export default PokemonIndex;