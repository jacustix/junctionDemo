import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import TableData from '../components/TableData';

function Dashboard() {
	useEffect(() => {
		fetch('http://127.0.0.1:8000/hackback/all')
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error(error));
	}, []);
	return (
		<Switch>
			<Route path='/tableData' component={TableData} />
		</Switch>
	);
}

export default Dashboard;
