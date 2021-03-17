import {combineReducers} from 'redux';
import actorReducer from './actor/actor.reducer';

const appReducers = combineReducers({
  actor: actorReducer,
});

const rootReducers = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducers(state, action);
};

export default rootReducers;
