import React, { useState, useEffect } from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ReferenceLine,
	ComposedChart,
	Area,
	Line,
	PieChart,
	Pie,
} from 'recharts';

import './BarChartComponent.style.css';

function BarChartComponent() {
	const [widthState, setWidthState] = useState(
		(window.innerWidth - 300 - 80 - 30) / 2
	);
	const [heightState, setHeightState] = useState(
		(window.innerHeight - 60 - 80 - 30) / 2
	);

	const checkSize = () => {
		const sizeW = (window.innerWidth - 300 - 80 - 30) / 2;
		const sizeH = (window.innerHeight - 60 - 80 - 30) / 2;
		setWidthState(sizeW);
		setHeightState(sizeH);
	};

	useEffect(() => {
		window.addEventListener('resize', checkSize);

		return () => {
			window.removeEventListener('resize', checkSize);
		};
	}, []);

	const data = [
		{
			name: 'Page A',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: 'Page C',
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: 'Page E',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: 'Page F',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: 'Page G',
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];

	const data01 = [
		{ name: 'Group A', value: 400 },
		{ name: 'Group B', value: 300 },
		{ name: 'Group C', value: 300 },
		{ name: 'Group D', value: 200 },
	];
	const data02 = [
		{ name: 'A1', value: 100 },
		{ name: 'A2', value: 300 },
		{ name: 'B1', value: 100 },
		{ name: 'B2', value: 80 },
		{ name: 'B3', value: 40 },
		{ name: 'B4', value: 30 },
		{ name: 'B5', value: 50 },
		{ name: 'C1', value: 100 },
		{ name: 'C2', value: 200 },
		{ name: 'D1', value: 150 },
		{ name: 'D2', value: 50 },
	];

	return (
		<div className='line-chart-container'>
			<div className='line-chart-wrapper'>
				<BarChart
					width={widthState}
					height={heightState}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					barSize={20}
				>
					<XAxis
						dataKey='name'
						scale='point'
						padding={{ left: 10, right: 10 }}
					/>
					<YAxis />
					<Tooltip />
					<Legend />
					<CartesianGrid strokeDasharray='3 3' />
					<Bar dataKey='pv' fill='#8884d8' background={{ fill: '#eee' }} />
				</BarChart>
			</div>
			<div className='line-chart-wrapper'>
				<BarChart
					width={widthState}
					height={heightState}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Legend />
					<ReferenceLine y={0} stroke='#000' />
					<Bar dataKey='pv' fill='#8884d8' />
					<Bar dataKey='uv' fill='#82ca9d' />
				</BarChart>
			</div>
			<div className='line-chart-wrapper'>
				<ComposedChart
					width={widthState}
					height={heightState}
					data={data}
					margin={{
						top: 20,
						right: 80,
						bottom: 20,
						left: 20,
					}}
				>
					<CartesianGrid stroke='#f5f5f5' />
					<XAxis
						dataKey='name'
						label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }}
					/>
					<YAxis
						label={{ value: 'Index', angle: -90, position: 'insideLeft' }}
					/>
					<Tooltip />
					<Legend />
					<Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' />
					<Bar dataKey='pv' barSize={20} fill='#413ea0' />
					<Line type='monotone' dataKey='uv' stroke='#ff7300' />
				</ComposedChart>
			</div>
			<div className='line-chart-wrapper'>
				<PieChart width={widthState} height={heightState}>
					<Pie
						data={data01}
						dataKey='value'
						cx={widthState / 2}
						cy={heightState / 2}
						outerRadius={
							heightState < widthState ? heightState * 0.24 : widthState - 230
						}
						fill='#8884d8'
					/>
					<Pie
						data={data02}
						dataKey='value'
						cx={widthState / 2}
						cy={heightState / 2}
						innerRadius={
							heightState < widthState ? heightState * 0.28 : widthState - 220
						}
						outerRadius={
							heightState < widthState ? heightState * 0.34 : widthState - 200
						}
						fill='#82ca9d'
						label
					/>
				</PieChart>
			</div>
		</div>
	);
}

export default BarChartComponent;
