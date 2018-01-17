//File Name: App.js
//Path: src/containers/
//Description: This file is used as a container for student login.
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Col} from 'react-bootstrap';
import { Home, Login } from './';
import {assetsPrefix} from '../constants';
import { RoutesComponent } from '../components';
import { connect } from 'react-redux';
import actions from '../actions'

@connect((state) => state)
class App extends Component {

	render() {
	    return (
	    	<Col>
		    	<Router>
					<RoutesComponent />
				</Router>
			</Col>
	    );
	}
}
 
export default App;