import {} from './actor.type';
import {GET_ACTORS} from './actor.type';
import {UPDATE_ACTORS} from './actor.type';

const initialState = {
  data: [],
};

const actorReducer = (state = initialState, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case GET_ACTORS:
    case UPDATE_ACTORS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state
  }
};

export default actorReducer
