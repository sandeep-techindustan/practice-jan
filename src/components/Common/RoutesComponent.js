//File Name: RoutesComponent.js
//Path: src/component/common
//Description: RoutesComponent is defined here, here we have defined all routes
import React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {
	Home,
} from '../../containers';
import { isLoggedIn } from '../../utils';
import { Header , Footer } from '../../components'

const checkAuth = () => {
	return isLoggedIn();
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
    	<div>
    		<Header {...props}/>
      		<Component {...props}/>
      	</div>
    ) : (
      <Redirect to={{ pathname: '/'}} />
    )
  )}/>
)


const PublicRoute = ({ component: Component, ...rest }) => {

	return <Route {...rest} render={props => {

    return  (
    	<div>
    		<Header {...props} />
    		<Component {...props}/>
    		<Footer {...props} />
    	</div>
    )
	}}/>
}


const RoutesComponent = () => {
	return(
		<div>
			<BrowserRouter>
				<div>
	  				<Switch>
						<PublicRoute exact path="/" component={Home} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default RoutesComponent;
