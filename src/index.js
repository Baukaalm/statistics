import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './components/Common/ScrollTop';

import * as serviceWorker from './serviceWorker';
import './index.css';

import App from './components/App';

const Root = () => (
	<BrowserRouter>
		<ScrollTop>
			<App />
		</ScrollTop>
	</BrowserRouter>
);

render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
