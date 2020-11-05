import restaurantsApi from '../entities/restaurantsApi.js';

export function getRestaurantCategories() {
  return dispatch => { //
    return restaurantsApi.getRestaurantCategories()
    .then(response => {
      if(response.error) {
        dispatch(getCategoriesFailure('Get Categories Failure'));
      }
      else {
        dispatch(getCategoriesSuccess(response));
      }
    })
  }
}

function getCategoriesFailure(msg){
  return {type: 'GET_CATEGORIES_FAILURE', msg};
}

function getCategoriesSuccess(response){
  return {type : 'GET_CATEGORIES_SUCCESS', response};
}
