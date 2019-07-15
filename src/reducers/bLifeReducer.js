import { B_LIFE_PLUS, B_LIFE_MINUS, B_LIFE_RESET } from '../actions';

export function bLifeReducer(state = 20, action) {
  switch (action.type) {
    case B_LIFE_PLUS:
      return action.bLife + 1;
    case B_LIFE_MINUS:
      return action.bLife - 1;
    case B_LIFE_RESET:
      return 20;
    default:
      return state;
  }
};