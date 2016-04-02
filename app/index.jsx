import React from 'react';
import {Router, Route} from 'react-router';
import {render} from 'react-dom';
import App from './App.jsx';

class Main extends React.Component {
  	render () {
	    return (
	    	<App/>
		)
	}
}

render(
	<Router>
		<Route path='/' component={Main}/>
	<Router>
	, document.getElementById('app'));