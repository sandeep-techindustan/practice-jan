//File Name: Home.js
//Path: src/containers/
//Description: This file is used as a container for gig'n home page.
import React, { Component } from 'react';
import {
	Row, 
	Col,
	Grid,
	Button,
	Image,
	ButtonGroup
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {assetsPrefix} from '../constants';
import {push} from 'react-router-redux';

export default class Home extends Component {

	render() {
		console.log("hello");
		return(
			<Col className="">
				Home
			</Col>
		);
	}
}