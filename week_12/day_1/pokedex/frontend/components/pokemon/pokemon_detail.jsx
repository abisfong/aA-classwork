import React from "react";


class PokemonDetail{
    constructor(props){
        super(props)
    }

    render () {
        return (
            <p>{this.props.pokeState}</p> 
        )
    }
};

export default PokemonDetail; 