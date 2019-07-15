import { B_LIFE_PLUS, B_LIFE_PLUS_MULTI, B_LIFE_MINUS, B_LIFE_MINUS_MULTI, B_LIFE_RESET } from '../actions';

export function bLifeReducer(state = 20, action) {
  switch (action.type) {
    case B_LIFE_PLUS:
      return action.bLife + 1;
    case B_LIFE_PLUS_MULTI:
      return action.bLife + 5;
    case B_LIFE_MINUS:
      return action.bLife - 1;
    case B_LIFE_MINUS_MULTI:
      if (action.bLife > 5) {
        return action.bLife - 5;
      } else {
        return 0;
      }
    case B_LIFE_RESET:
      return 20;
    default:
      return state;
  }
};