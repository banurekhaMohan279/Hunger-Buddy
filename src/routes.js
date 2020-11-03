import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from './components/App';
import Restaurants from './components/restaurants.js';

export default function Routes() {
  return(
      <Router>
        <Switch>
          <Route exact path = '/'>
            <App />
          </Route>
          <Route path = '/Home'>
            <Restaurants />
          </Route>
        </Switch>
      </Router>
  )
}
