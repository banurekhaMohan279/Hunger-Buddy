import {combineReducers} from 'redux';
import restaurantsReducer from './restaurantsReducer';
import getCitiesReducer from './getCitiesReducer';

const rootReducer = combineReducers({
  restaurantsReducer,
  getCitiesReducer
});

export default rootReducer;
