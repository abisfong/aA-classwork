import { combineReducers } from "redux";

import entitiesReducer from './entities_reducer';
import sessionErrorReducer from "./session_error_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorReducer
})

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer
});

export default rootReducer;





