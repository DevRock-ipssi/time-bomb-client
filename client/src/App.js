import React from 'react';
import './App.css';

// react-router imports --
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home.component';
import Room from './pages/Room/Room.component';

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/room" component={Room} />
			<Route exact path="/room" component={Room} />
		</Switch>
	);
};  

export default App;
