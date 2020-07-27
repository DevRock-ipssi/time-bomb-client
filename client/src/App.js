import React from 'react';
import logo from './logo.svg';
import './App.css';

// react-router imports --
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	);
};

export default App;
