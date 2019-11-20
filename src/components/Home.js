/* @flow */
import React, { Component, lazy } from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
const Main = lazy(() => import('./Main'));

class Home extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route component={Main} path="/" />
				</Switch>
			</Layout>
		);
	}
}

export default withRouter(Home);
