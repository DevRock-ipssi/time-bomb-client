import React from 'react';
import './App.css';

// react-router imports --
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.component';
import Room from './pages/Room.component';

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/init" component={Room} />
			<Route exact path="/join" component={Home} />
		</Switch>
	);
};

export default App;
