import { RECEIVE_A_POKEMON } from './../actions/pokemon_actions';


const movesReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state)
    switch (action.type){
        case RECEIVE_A_POKEMON:
            return action.pokeState.moves;
        default: 
            return state; 
    }
}

export default movesReducer;