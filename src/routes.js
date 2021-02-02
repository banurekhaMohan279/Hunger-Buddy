import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from './components/App';
import Location from './components/location.js';
//import Restaurants from './components/restaurants.js';
//import RestaurantDetails from './components/restaurantDetails.js';
const Restaurants = lazy(() => import ('./components/restaurants.js'));
const RestaurantDetails = lazy(() => import ('./components/restaurantDetails.js'));

export default function Routes() {
  return(
      <Router>
        <Suspense fallback = {<div> Loading! </div>}>
            <Switch>
              <Route exact path = '/Hunger-Buddy'>
                <App />
              </Route>
              <Route path = '/Location'>
                <Location />
              </Route>
              <Route path = '/Restaurants' component = {Restaurants} >
              </Route>
              <Route path = '/RestaurantDetails' component = {RestaurantDetails}>
              </Route>
            </Switch>
        </Suspense>
      </Router>
  )
}
