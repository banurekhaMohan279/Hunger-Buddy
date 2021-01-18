/*
New modules
redux, react-redux, react-router-dom

Changes in pages for
1.Router
  Components/App.js, routes.js, index.js
2. Actions/reducers
  Components/restaurants.js, entities/restaurantsApi.js, actions/restaurants.js, reducers/restaurantsReducer.js,
  reducers/rootReducer.js, index.js (provider, createStore)

// TODO:
sort based on rating/cuisine
pagination
lazy loading
responsiveness

Notes-Revisit
1. Centering nested children with flexbox
2. React-router vs React-router-dom
  // usehistory for stateless/function components
  //withRouter for class components
  https://reactrouter.com/web/guides/quick-start
  https://codeburst.io/getting-started-with-react-router-5c978f70df91
3. Provider makes redux store available to nested components wrapped in connect() function
  https://react-redux.js.org/api/provider
4. Dispatch actions with redux
  //Maintain data from api in redux state and others in local state
  // Need for thunk, applymiddleware, configurestore??
  // check how mapstatetoprops takes reducer state
  https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
5. css
  // on css change is entire page repainted i.e new network calls? or only on refresh? - hot update?
  Image popup on hover
  draw star rating
6. Revisit - event handling with params
7. Create-react-app on Github pages
  https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
8. concat/ append to previous state - restaurantsReducer
9. Modify state of different reducer - getCitiesReducer/ restaurantsReducer
*/
