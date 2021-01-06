import getCitiesApi from '../entities/getCitiesApi.js';

export default function getCities(location){
  return dispatch => {
    return getCitiesApi(location.location)
    .then(response => {
      if(response.error){
        dispatch(getCitiesFailure('Get cities failure'));
      }
      else{
        dispatch(getCitiesSuccess(response))
      }
    });
  }
}

function getCitiesSuccess(response){
  return {type:'GET_CITIES_SUCCESS', response};
}

function getCitiesFailure(error){
  return {type:'GET_CITIES_FAILURE', error};
}
