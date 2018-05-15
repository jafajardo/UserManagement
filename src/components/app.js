import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Home from './home';
import Page1 from './page1';

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Page1" component={Page1} />
    </Switch>
  </Router>
)

export default App;