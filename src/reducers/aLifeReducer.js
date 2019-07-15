import { A_LIFE_PLUS, A_LIFE_PLUS_MULTI, A_LIFE_MINUS, A_LIFE_MINUS_MULTI, A_LIFE_RESET } from '../actions';

export function aLifeReducer(state = 20, action) {
  switch (action.type) {
    case A_LIFE_PLUS:
      return action.aLife + 1;
    case A_LIFE_PLUS_MULTI:
      return action.aLife + 5;
    case A_LIFE_MINUS:
      return action.aLife - 1;
    case A_LIFE_MINUS_MULTI:
      if (action.aLife > 5) {
        return action.aLife - 5;
      } else {
        return 0;
      }
    case A_LIFE_RESET:
      return 20;
    default:
      return state;
  }
};