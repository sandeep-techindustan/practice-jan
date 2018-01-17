//File Name: Header.js
//Path: src/component/
//Description: This is common header component for all pages.
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {assetsPrefix} from '../constants';
import {Grid,Row,Col,Nav,Navbar,Button,Image} from 'react-bootstrap';
import {connect} from 'react-redux';

@connect((state) => state)
export default class Header extends Component {


	render () {
		
		return (
			<div>
				header
			</div>
		)
	}
}