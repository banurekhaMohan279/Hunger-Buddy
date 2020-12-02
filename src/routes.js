import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from './components/App';
import Location from './components/location.js';
import Restaurants from './components/restaurants.js';
import RestaurantDetails from './components/restaurantDetails.js';

export default function Routes() {
  return(
      <Router>
        <Switch>
          <Route exact path = '/Hunger-Buddy'>
            <App />
          </Route>
          <Route path = '/Location'>
            <Location />
          </Route>
          <Route path = '/Restaurants'>
            <Restaurants />
          </Route>
          <Route path = '/RestaurantDetails'>
            <RestaurantDetails />
          </Route>
        </Switch>
      </Router>
  )
}
