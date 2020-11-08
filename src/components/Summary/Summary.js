import React from 'react';

import './Summary.style.css';
import BarChartComponent from '../Charts/BarChartComponent';

function Summary({ data }) {
	const sumData = {
		cost: 0,
		co2: 0,
		rezsi: 0,
		ingatlanErtek: 0,
		lakber: 0,
		megterules: 0,
	};
	data.forEach((element) => {
		if (element.isInBudget) {
			sumData.cost = sumData.cost + element.cost;
			sumData.co2 = sumData.co2 + element.rows[0].percent;
			sumData.rezsi = sumData.rezsi + element.rows[1].percent;
			sumData.ingatlanErtek = sumData.ingatlanErtek + element.rows[2].percent;
		}
	});
	sumData.megterules =
		sumData.cost > 0 && sumData.rezsi > 0
			? (sumData.cost / (sumData.rezsi * 0.1734 * 29342)) * 100
			: 0;
	sumData.megterules = sumData.megterules.toFixed(0);

	return (
		<div className='summary'>
			<BarChartComponent data={sumData} />
			<div className='summary-container'>
				<div className='summary-item'>
					<div className='title'>Summary</div>
					<div className='text-columns'>
						<div>
							<div>Cost:</div>
							<div>CO2 reduction: </div>
							<div>Energy usage reduction: </div>
							<div>Value increase: </div>
							<div>Rate of return (year): </div>
						</div>
						<div className='values'>
							<div>{sumData.cost + ' €'}</div>
							<div>{sumData.co2.toFixed(2) + ' %'}</div>
							<div>{sumData.rezsi.toFixed(2) + ' %'}</div>
							<div>{sumData.ingatlanErtek.toFixed(2) + ' %'}</div>
							<div>{sumData.megterules}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Summary;
