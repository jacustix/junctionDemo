import React from 'react';

import Legcserelo from '../../assets/legcserelo-ikon.svg';
import Windows from '../../assets/ablak-ikon.svg';
import Futes from '../../assets/futes-ikon.svg';
import Napelem from '../../assets/napelem-ikon.svg';
import Teto from '../../assets/teto-ikon.svg';

import './Offers.style.css';

function Offers({ data }) {
	const arr = [Legcserelo, Windows, Napelem, Teto, Futes];
	return (
		<>
			<h2> Offers </h2>
			<div className='offer-container'>
				{data.map((item) => {
					return (
						<div
							key={new Date().getTime().toString() * Math.random()}
							className={item.isInBudget ? 'offer-item' : 'offer-item disabled'}
						>
							<div className='icon'>
								<img src={arr[item.id - 1]} />
							</div>
							<div className='title'>{item.title}</div>
							<div className='text-columns'>
								<div>
									<div>Cost:</div>
									<div>CO2 reduction: </div>
									<div>Energy usage reduction: </div>
									<div>Value increase: </div>
									<div>Rate of return (year): </div>
								</div>
								<div className='values'>
									<div>{item.cost + ' €'}</div>
									<div>{item.rows[0].percent + '% ' + item.rows[0].text}</div>
									<div>{item.rows[1].percent + '% ' + item.rows[1].text}</div>
									<div>{item.rows[2].percent + '% ' + item.rows[2].text}</div>
									<div>{item.rateOfReturn + ' year'}</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Offers;
