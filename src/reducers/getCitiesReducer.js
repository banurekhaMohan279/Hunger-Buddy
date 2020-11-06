const initialState = {cities:{}, error:null}

export default function getCitiesReducer (state = initialState, action){
  switch(action.type){
    case 'GET_CITIES_SUCCESS':
      return Object.assign (state, {cities : action.response , error: null});
    case 'GET_CITIES_FAILURE':
      return Object.assign (state, {citie : {}, error: action.error});
    default:
      return state;
  }
}
