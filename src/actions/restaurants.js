import restaurantsApi from '../entities/restaurantsApi.js';

export function getAllRestaurants() {
  return dispatch => { //
    return restaurantsApi.getAllRestaurants()
    .then(response => {
      if(response.error) {
        dispatch(getRestaurantsFailure('Get Restaurants Failure'));
      }
      else {
        dispatch(getRestaurantsSuccess(response));
      }
    })
  }
}

function getRestaurantsFailure(msg){
  return {type: 'GET_RESTAURANTS_FAILURE', msg};
}

function getRestaurantsSuccess(response){
  return {type : 'GET_RESTAURANTS_SUCCESS', response};
}
