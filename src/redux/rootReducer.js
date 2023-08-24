import { combineReducers } from 'redux';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;

