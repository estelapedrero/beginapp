import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './App';
import AboutMe from './AboutMe';
import Design from './Design';

const app = document.getElementById('app');
// Render all <App /> in div#app in index.html
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={App}></IndexRoute>
			<Route path ="aboutme" component={AboutMe}></Route>
			<Route path ="design" component={Design}></Route>
		</Route>
	</Router>,
 app)