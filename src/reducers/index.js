import { combineReducers } from 'redux';
import { aLifeReducer } from './aLifeReducer';
import { bLifeReducer } from './bLifeReducer';
import { confirmReducer } from './confirmReducer';

const rootReducer = combineReducers({
  aLife: aLifeReducer,
  bLife: bLifeReducer,
  isConfirmed: confirmReducer,
});

export default rootReducer;