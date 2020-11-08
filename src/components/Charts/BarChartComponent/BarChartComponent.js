import React from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

import './BarChartComponent.style.css';

function BarChartComponent({ data }) {
	const newData = [
		{
			name: 'CO2(%)',
			value: data.co2,
		},
		{
			name: 'Energy usage reduction(%)',
			value: data.rezsi,
		},
		{
			name: 'Value increase(%)',
			value: data.ingatlanErtek,
		},
		{
			name: 'Rate of return (year)(%)',
			value: data.megterules,
		},
	];

	return (
		<div className='line-chart-wrapper'>
			<BarChart
				width={1000}
				height={285}
				data={newData}
				margin={{
					top: 10,
					right: 60,
					left: 0,
					bottom: 5,
				}}
				barSize={20}
			>
				<XAxis dataKey='name' scale='point' padding={{ left: 10, right: 10 }} />
				<YAxis />
				<Tooltip />
				<Legend />
				<CartesianGrid strokeDasharray='3 3' />
				<Bar dataKey='value' fill='#8884d8' background={{ fill: '#eee' }} />
			</BarChart>
		</div>
	);
}

export default BarChartComponent;
