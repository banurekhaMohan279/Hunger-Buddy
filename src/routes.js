import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import App from './App';
import Restaurants from './restaurants.js';

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
