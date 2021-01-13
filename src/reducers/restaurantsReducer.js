const initialState = {
  restaurants:[],
  error:null
}

export default function restaurantsReducer ( state = initialState, action ){
  switch(action.type){
    case 'GET_RESTAURANTS_FAILURE':
      return  Object.assign ({}, state, {restaurants :  null, error: action.msg}); // assign to update state
    case 'GET_RESTAURANTS_SUCCESS':
      return Object.assign ({}, state, {restaurants : state.restaurants.concat(action.response.restaurants), error: null });
    default:
      return state;
  }
}
