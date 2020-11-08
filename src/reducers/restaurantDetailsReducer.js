const initialState = {
  restaurantDetails:null,
  error:null
}

export default function restaurantDetailsReducer ( state = initialState, action ){
  switch(action.type){
    case 'GET_RESTAURANT_DETAILS_FAILURE':
      return  Object.assign ({}, state, {restaurantDetails :  null, error: action.msg}); // assign to update state
    case 'GET_RESTAURANT_DETAILS_SUCCESS':
      return Object.assign ({}, state, {restaurantDetails : action.response, error: null });
    default:
      return state;
  }
}
