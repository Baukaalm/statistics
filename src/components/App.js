import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
class App extends Component {
	componentDidMount() {
		window.addEventListener('resize', () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	}
	render() {
		return (
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route component={Home} path="/" />
				</Switch>
			</Suspense>
		);
	}
}

export default withRouter(App);
