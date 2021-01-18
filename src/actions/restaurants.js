import restaurantsApi from '../entities/restaurantsApi.js';

export function getAllRestaurants(city,page,isInit) {
  return dispatch => { //
    return restaurantsApi.getAllRestaurants(city,page,isInit)
    .then(response => {
      if(response.error) {
        dispatch(getRestaurantsFailure('Get Restaurants Failure'));
      }
      else if(isInit == 'initLoad'){
        dispatch(getInitRestaurantsSuccess(response));
        console.log("init restaurants");
      }
      else{
        dispatch(getRestaurantsSuccess(response));
        console.log("subsequent restaurants load");
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

function getInitRestaurantsSuccess(response){
  return {type : 'GET_INIT_RESTAURANTS_SUCCESS', response};
}
