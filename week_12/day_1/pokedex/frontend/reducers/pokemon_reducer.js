import { RECEIVE_ALL_POKEMON, RECEIVE_A_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return Object.assign({}, action.pokemon, state);
  case RECEIVE_A_POKEMON:
    const newState = Object.assign({}, state);
    return newState[action.pokeState.pokemon.id] = action.pokeState.pokemon;  
  default:
    return state;
  }
}
  
export default pokemonReducer;
