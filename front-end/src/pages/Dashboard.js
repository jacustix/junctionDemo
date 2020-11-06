import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import TableData from '../components/TableData';
import LineChartComponent from '../components/Charts/LineChartComponent';
import BarChartComponent from '../components/Charts/BarChartComponent';

function Dashboard() {
	const Container = styled.div`
		height: calc(100vh - 60px);
		padding: 30px;
		overflow: auto;
		flex: 1;
	`;

	return (
		<Container>
			<Switch>
				<Route path='/tableData' component={TableData} />
				<Route path='/lineCharts' component={LineChartComponent} />
				<Route path='/barCharts' component={BarChartComponent} />
			</Switch>
		</Container>
	);
}

export default Dashboard;
