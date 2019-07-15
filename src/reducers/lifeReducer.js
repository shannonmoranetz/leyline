import { A_LIFE_PLUS, A_LIFE_MINUS, B_LIFE_PLUS, B_LIFE_MINUS } from '../actions';

export function lifeReducer(state = 20, action) {
  switch (action.type) {
    case A_LIFE_PLUS:
      return action.Alife + 1;
    case A_LIFE_MINUS:
      return action.Alife - 1;
    case B_LIFE_PLUS:
      return action.Blife + 1;
    case B_LIFE_MINUS:
      return action.Blife - 1;
    default:
      return state;
  }
};