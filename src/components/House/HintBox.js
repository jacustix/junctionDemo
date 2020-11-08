import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

import './HintBox.style.css';

import Legcserelo from '../../assets/legcserelo-ikon.svg';
import Windows from '../../assets/ablak-ikon.svg';
import Futes from '../../assets/futes-ikon.svg';
import Napelem from '../../assets/napelem-ikon.svg';
import Teto from '../../assets/teto-ikon.svg';
import { ReactComponent as Close } from '../../assets/close.svg';
import { ReactComponent as Add } from '../../assets/add-icon.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as ArrowUp } from '../../assets/arrow-up.svg';

function HintBox({ title, rows, positions, isInBudget, id, handleChange }) {
	const pos = {
		left: positions.left,
		top: positions.top,
	};
	const arr = [Legcserelo, Windows, Napelem, Teto, Futes];
	useEffect(() => {
		if (isInBudget) {
			console.log('lefut');
			document
				.getElementById('c' + id)
				.classList.add('selected-house-component');
		}
	}, []);
	return (
		<div className={isInBudget ? 'hint-box' : 'hint-box disabled'} style={pos}>
			<div className='hint-header'>
				<div>
					<img src={arr[id - 1]} />
					<span>{title}</span>
				</div>
			</div>
			{rows.map((row, index) => {
				const timeStamp = new Date();
				return (
					<div key={timeStamp.getTime() + Math.random()} className='rows'>
						{index > 1 ? <ArrowUp /> : <Arrow />}{' '}
						<span className='percent'>{row.percent + '%'}</span>
						<span>{row.text}</span>
					</div>
				);
			})}
			<div className='button-container'>
				<Button
					onClick={() => handleChange(id)}
					variant={isInBudget ? 'danger' : 'primary'}
				>
					{isInBudget ? 'Unselect' : 'Select'}
				</Button>
			</div>
		</div>
	);
}

export default HintBox;
