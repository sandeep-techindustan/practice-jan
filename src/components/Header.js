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
			<Grid>
				<Row>
					<Col xs={12} sm={12} md={12} className="text-center"><h1>React's Seed</h1><p>Header</p></Col>

				</Row>
			</Grid>
		)
	}
}
