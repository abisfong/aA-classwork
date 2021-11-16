import { connect } from "react-redux";
import PokemonDetail from "./pokemon_detail";

const mapStateToProps = (state, ownProps) => ({
    pokeState: {
        pokemon: state.pokemon[ownProps.match.params.id],
        items: state.items,
        moves: state.moves

}
});

export default connect(mapStateToProps, null)(PokemonDetail);