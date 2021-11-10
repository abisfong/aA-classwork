import { combineReducers } from "redux";
import stepsReducer from "./steps_reducer";
import todosReducer from './todos_reducer';

const rootReducer = combineReducers({
  Todos: todosReducer,
  Steps: stepsReducer
});

export default rootReducer;