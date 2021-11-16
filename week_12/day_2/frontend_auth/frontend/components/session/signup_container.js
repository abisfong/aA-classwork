import { connect } from "react-redux";
import { createUser } from "../../actions/session_actions";
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  createUser: formInput => dispatch(createUser(formInput))
})

export default connect(null, mapDispatchToProps)(Signup);