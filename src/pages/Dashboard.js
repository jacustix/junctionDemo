import React from 'react';
import styled from 'styled-components';

import Calculator from '../pages/Calculator';

function Dashboard() {
	const Container = styled.div`
		padding: 10px;
		flex: 1;
	`;

	return (
		<Container>
			<Calculator />
		</Container>
	);
}

export default Dashboard;
