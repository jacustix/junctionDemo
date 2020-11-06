import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import TableData from '../components/TableData';
import LineChartComponent from '../components/Charts/LineChartComponent';
import BarChartComponent from '../components/Charts/BarChartComponent';
import FormsComponent from '../components/FormsComponent';

function Dashboard() {
	const [state, setState] = useState(null);

	const Container = styled.div`
		height: calc(100vh - 60px);
		padding: 30px;
		overflow: auto;
		flex: 1;
	`;

	useEffect(() => {
		fetch('http://127.0.0.1:8000/hackback/6')
			.then((response) => response.json())
			.then((data) => setState(data));
	}, []);

	console.log(state);
	return (
		<Container>
			<Switch>
				<Route path='/tableData' component={TableData} />
				<Route path='/lineCharts' component={LineChartComponent} />
				<Route path='/barCharts' component={BarChartComponent} />
				<Route path='/forms' component={FormsComponent} />
			</Switch>
		</Container>
	);
}

export default Dashboard;
