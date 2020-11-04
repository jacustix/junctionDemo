import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';

const Container = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

ReactDOM.render(
	<Router>
		<Header />
		<Container>
			<Sidebar />
			<Dashboard />
		</Container>
	</Router>,
	document.getElementById('root')
);
