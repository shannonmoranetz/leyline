import { CONFIRM } from '../actions';

export function confirmReducer(state = false, action) {
  switch (action.type) {
    case CONFIRM:
      return action.isConfirmed;
    default:
      return state;
  }
};