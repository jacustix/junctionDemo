import React, { useState, useEffect } from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	Brush,
} from 'recharts';

import './LineChartComponent.style.css';

function LineChartComponent() {
	const [widthState, setWidthState] = useState(
		(window.innerWidth - 300 - 80 - 30) / 2
	);

	const checkSize = () => {
		const size = (window.innerWidth - 300 - 80 - 30) / 2;
		console.log(size);
		setWidthState(size);
	};

	useEffect(() => {
		window.addEventListener('resize', checkSize);
		return () => {
			window.removeEventListener('resize', checkSize);
		};
	}, []);

	const data = [
		{ name: 'Page A', uv: 4553, pv: 2400, amt: 2400, uvError: [75, 20] },
		{ name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
		{ name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
		{ name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
		{ name: 'Page E', uv: 278, pv: 3900, amt: 2400, uvError: 28 },
		{ name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
		{ name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
		{ name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
		{ name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
		{ name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
	];

	const handleLineClick = (data, e) => {
		console.log('callback', data, e);
	};

	const handleClickDot = (data, e) => {
		console.log('dot click', data, e);
	};

	return (
		<div className='line-chart-container'>
			<div className='line-chart-wrapper'>
				<p>LineChart with two y-axes</p>
				<LineChart
					width={widthState}
					height={400}
					data={data}
					margin={{ top: 10, bottom: 10, left: 30, right: 30 }}
				>
					<XAxis dataKey='name' />
					<CartesianGrid stroke='#f5f5f5' />
					<Brush />
					<Tooltip filterNull={false} />
					<Line
						type='monotone'
						key='0'
						dataKey='uv'
						stroke='#ff7300'
						strokeWidth={5}
						yAxisId={0}
						activeDot={{ onClick: handleClickDot }}
						onClick={handleLineClick}
					/>
					<Line
						type='monotone'
						key={'2'}
						dataKey='pv'
						stroke='#387908'
						yAxisId={1}
						activeDot={{ fill: '#387908', stroke: 'none', r: 6 }}
					/>
				</LineChart>
			</div>

			<div className='line-chart-wrapper'>
				<p>LineChart with three y-axes</p>
				<LineChart
					width={widthState}
					height={400}
					data={data}
					margin={{ top: 10, bottom: 10, left: 0, right: 30 }}
				>
					<YAxis type='number' yAxisId={0} domain={[0, 1020]} />
					<XAxis dataKey='name' />
					<Tooltip position={{ y: 200 }} />
					<CartesianGrid stroke='#f5f5f5' />
					<Line dataKey='uv' stroke='#ff7300' strokeWidth={2} yAxisId={0} />
					<Line dataKey='pv' stroke='#387908' strokeWidth={2} yAxisId={0} />
					<Line dataKey='amt' stroke='#38abc8' strokeWidth={2} yAxisId={0} />
				</LineChart>
			</div>
		</div>
	);
}

export default LineChartComponent;
