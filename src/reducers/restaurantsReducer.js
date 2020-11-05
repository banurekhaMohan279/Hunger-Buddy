const initialState = {
  categories:null,
  error:null
}

export default function restaurantsReducer ( state = initialState, action ){
  switch(action.type){
    case 'GET_CATEGORIES_FAILURE':
      return  Object.assign ({}, state, {categories :  null, error: action.msg}); // assign to update state
    case 'GET_CATEGORIES_SUCCESS':
      return Object.assign ({}, state, {categories : action.response, error: null });
    default:
      return state;
  }
}
