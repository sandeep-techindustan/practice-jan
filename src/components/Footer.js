//File Name: Footer.js
//Path: src/component/
//Description: This is common footer for all pages.
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {assetsPrefix} from '../constants';
import {Grid,Col,Row,Button,Image } from 'react-bootstrap';
import {connect} from 'react-redux';

@connect((state) => state)
export default class Footer extends Component {
	render () {
		const { pathname } = this.props.location;

		return (
			<Grid>
				<Row>
					<Col xs={12} sm={12} md={12} className="text-center"><p>Footer</p></Col>
				</Row>
			</Grid>
		)
	}
}
