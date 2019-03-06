import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './presentational/navigation.component';
import DevTools from './DevTools';
//import { getCountries } from './actions/actions-countries';


render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={Navigation}>

			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);

//(
//	<Provider store={store}>
//		<div>
//			<h1>Inicjalizacja projektu</h1>
//			<DevTools />
//		</div>
//	</Provider>,
//	document.getElementById('root')
//);

//store.dispatch(getCountries());



