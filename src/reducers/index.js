import { combineReducers } from 'redux';
import { lifeReducer } from './lifeReducer';

const rootReducer = combineReducers({
  updateLife: lifeReducer,
});

export default rootReducer;