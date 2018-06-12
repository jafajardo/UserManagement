import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Dashboard from './Dashboard';
import User from './User';

const App = () => (
	<Router history={browserHistory}>
		<Switch>
			<Route exact path="/" component={Dashboard} />
			<Route path="/User" component={User} />
		</Switch>
	</Router>
);

export default App;