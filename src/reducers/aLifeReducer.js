import { A_LIFE_PLUS, A_LIFE_MINUS, A_LIFE_RESET } from '../actions';

export function aLifeReducer(state = 20, action) {
  switch (action.type) {
    case A_LIFE_PLUS:
      return action.aLife + 1;
    case A_LIFE_MINUS:
      return action.aLife - 1;
    case A_LIFE_RESET:
      return 20;
    default:
      return state;
  }
};