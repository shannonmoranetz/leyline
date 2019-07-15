import { B_LIFE_PLUS, B_LIFE_MINUS } from '../actions';

export function bLifeReducer(state = 20, action) {
  switch (action.type) {
    case B_LIFE_PLUS:
      return action.bLife + 1;
    case B_LIFE_MINUS:
      return action.bLife - 1;
    default:
      return state;
  }
};