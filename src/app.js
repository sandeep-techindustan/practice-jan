//File Name: app.js
//Path: src/
//Description: This file is the main container of the app, it contains all route components and redux store.
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import {createMemoryHistory} from 'history';
import { syncHistoryWithStore } from 'react-router-redux'
import './init';
import store from './store';
import RoutesComponent from './components';
import './assets/less/main.less';
import {mountNode} from './constants';
import Frame from 'react-frame-component';
import {host} from './constants';

//const history = syncHistoryWithStore(createMemoryHistory(), store);
const history = createMemoryHistory(store);
ReactDOM.render(
	  <Provider store={store}>
	    <Router history={history}>
	      <RoutesComponent />
	    </Router>
	  </Provider>,
  document.getElementById(mountNode)
)
