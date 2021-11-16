import { RECEIVE_A_POKEMON } from './../actions/pokemon_actions';


const itemsReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state)
    switch (action.type){
        case RECEIVE_A_POKEMON:
            return action.pokeState.items; 
        default: 
            return state; 
    }
}

export default itemsReducer;