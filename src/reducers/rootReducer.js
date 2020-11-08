import {combineReducers} from 'redux';
import restaurantsReducer from './restaurantsReducer';
import getCitiesReducer from './getCitiesReducer';
import restaurantDetailsReducer from './restaurantDetailsReducer';

const rootReducer = combineReducers({
  restaurantsReducer,
  getCitiesReducer,
  restaurantDetailsReducer
});

export default rootReducer;
