import React, { useState } from 'react';

import House from '../../components/House';
import Offers from '../../components/Offers';
import Summary from '../../components/Summary';

const data = [
	{
		id: 1,
		title: 'Ventilation',
		cost: 10000,
		rateOfReturn: 33,
		rows: [
			{
				percent: 5.9,
				text: 'CO2 reduction',
			},
			{
				percent: 5.9,
				text: 'Energy usage reduction',
			},
			{
				percent: 5.0,
				text: 'Value increase',
			},
		],
		positions: {
			top: '5px',
			left: '80px',
		},
		isInBudget: true,
	},
	{
		id: 2,
		title: 'Doors and windows',
		cost: 13000,
		rateOfReturn: 65,
		rows: [
			{
				percent: 3.9,
				text: 'CO2 reduction',
			},
			{
				percent: 3.9,
				text: 'Energy usage reduction',
			},
			{
				percent: 6.7,
				text: 'Value increase',
			},
		],
		positions: {
			top: '292px',
			left: '125px',
		},
		isInBudget: true,
	},
	{
		id: 3,
		title: 'Solar panels',
		cost: 5500,
		rateOfReturn: 11,
		rows: [
			{
				percent: 9.5,
				text: 'CO2 reduction',
			},
			{
				percent: 9.5,
				text: 'Energy usage reduction',
			},
			{
				percent: 3.7,
				text: 'Value increase',
			},
		],
		positions: {
			top: '10px',
			left: '1245px',
		},
		isInBudget: true,
	},
	{
		id: 4,
		title: 'Roof insulation',
		cost: 300,
		rateOfReturn: 3,
		rows: [
			{
				percent: 2.4,
				text: 'CO2 reduction',
			},
			{
				percent: 2.4,
				text: 'Energy usage reduction',
			},
			{
				percent: 0.3,
				text: 'Value incrase',
			},
		],
		positions: {
			top: '40px',
			left: '940px',
		},
		isInBudget: false,
	},
	{
		id: 5,
		title: 'Heating',
		cost: 17316,
		rateOfReturn: 20,
		rows: [
			{
				percent: 16.9,
				text: 'CO2 reduction',
			},
			{
				percent: 16.9,
				text: 'Energy usage reduction',
			},
			{
				percent: 16.7,
				text: 'Value incrase',
			},
		],
		positions: {
			top: '320px',
			left: '896px',
		},
		isInBudget: false,
	},
];

function Calculator() {
	const [state, setState] = useState(data);

	const handleChange = (id) => {
		const newData = state.map((item) => {
			if (item.id === id) {
				console.log(item.id + ' -> ' + id);
				if (item.isInBudget) {
					document
						.getElementById('c' + item.id)
						.classList.remove('selected-house-component');
				} else {
					document
						.getElementById('c' + item.id)
						.classList.add('selected-house-component');
				}
				return { ...item, isInBudget: !item.isInBudget };
			} else {
				return item;
			}
		});
		setState(newData);
	};

	return (
		<>
			<House data={state} handleChange={handleChange} />
			<Summary data={state} />
			<Offers data={state} />
		</>
	);
}

export default Calculator;
