const initialState = {cities:{}, error:null}

export default function getCitiesReducer (state = initialState, action){
  switch(action.type){
    case 'GET_CITIES_SUCCESS':
      localStorage.setItem('locationId',JSON.stringify(action.response["location_suggestions"][0]["entity_id"])); // to persisit locationId on refresh
      return Object.assign (state, {cities : action.response , error: null});
    case 'GET_CITIES_FAILURE':
      return Object.assign (state, {cities : {}, error: action.error});
    default:
      return state;
  }
}
