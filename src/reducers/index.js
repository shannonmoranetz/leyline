import { combineReducers } from 'redux';
import { aLifeReducer } from './aLifeReducer';
import { bLifeReducer } from './bLifeReducer';

const rootReducer = combineReducers({
  aLife: aLifeReducer,
  bLife: bLifeReducer,
});

export default rootReducer;