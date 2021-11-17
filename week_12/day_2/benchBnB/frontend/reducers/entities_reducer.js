import { combineReducers } from "redux";

import sessionsReducer from "./sessions_reducer";

const entitiesReducer = combineReducers({
  sessions: sessionsReducer,
});

export default entitiesReducer;