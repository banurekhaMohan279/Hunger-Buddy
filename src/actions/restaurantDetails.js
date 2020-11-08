import restaurantDetailsApi from '../entities/restaurantDetailsApi.js';

export function getRestaurantDetails(res_id) {
  return dispatch => { //
    return restaurantDetailsApi.getRestaurantDetails(res_id)
    .then(response => {
      if(response.error) {
        dispatch(getRestaurantDetailsFailure('Get Restaurant Details Failure'));
      }
      else {
        dispatch(getRestaurantDetailsSuccess(response));
      }
    })
  }
}

function getRestaurantDetailsFailure(msg){
  return {type: 'GET_RESTAURANT_DETAILS_FAILURE', msg};
}

function getRestaurantDetailsSuccess(response){
  return {type : 'GET_RESTAURANT_DETAILS_SUCCESS', response};
}
