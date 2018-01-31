//File Name: devApp.js
//Path: src/
//Description: This file contains router and redux store.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import {
  Router,
  Route,
  Link
} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import './init';
import store from './store';
import { RoutesComponent } from './components';
import './assets/scss/main.scss';
import {App} from './containers';

//const history = syncHistoryWithStore(browserHistory, store);
const history = createBrowserHistory(store)


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    	<App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
