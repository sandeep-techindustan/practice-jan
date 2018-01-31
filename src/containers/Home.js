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
			<Grid>
				<Row style={{margin: 200, height: '30vh'}}>
					<Col xs={12} sm={12} md={12} className="text-center"><h1>Home / Body</h1><p>This page will be changed during routing but the header and footer won't change.</p></Col>
				</Row>
			</Grid>
		);
	}
}
