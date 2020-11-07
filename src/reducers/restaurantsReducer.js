const initialState = {
  restaurants:null,
  error:null
}

export default function restaurantsReducer ( state = initialState, action ){
  switch(action.type){
    case 'GET_RESTAURANTS_FAILURE':
      return  Object.assign ({}, state, {restaurants :  null, error: action.msg}); // assign to update state
    case 'GET_RESTAURANTS_SUCCESS':
      return Object.assign ({}, state, {restaurants : action.response, error: null });
    default:
      return state;
  }
}
