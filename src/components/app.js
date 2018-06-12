import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Dashboard from './Dashboard';
import Page1 from './page1';

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/Page1" component={Page1} />
    </Switch>
  </Router>
)

export default App;