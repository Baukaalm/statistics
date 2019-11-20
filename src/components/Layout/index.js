import React from 'react';
import Navigation from '../Navigation';

const Layout = ({ children }) => {
	return (
			<div
				style={{
					backgroundColor: '#161823',

					color: '#fff',
				}}
			>
				<header style={{ textAlign: 'center' }} />
				<main
					style={{
                        height: 'calc(100vh - 56px)',
                        height: 'calc(var(--vh, 1vh) * 100)'
					}}
				>
					{children}
				</main>
				<footer style={{position: 'absolute', bottom:0, width:'100%'}}>
					<Navigation />
				</footer>
			</div>
	);
};

export default Layout;
