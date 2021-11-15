import { RECEIVE_A_POKEMON } from './../actions/pokemon_actions';


const itemsReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state)
    switch (action.type){
        case RECEIVE_A_POKEMON:
            const itemArr = Object.values(pokeState.pokemon.items)
            itemArr.forEach(item => {
                newState[item.id] = item;
            })
            return newState; 
        default: 
            return state; 
    }
}

