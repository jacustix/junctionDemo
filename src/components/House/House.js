import React, { useState } from 'react';

import { ReactComponent as HouseSvg } from '../../assets/house.svg';
import HintBox from './HintBox';

function House({ data, handleChange }) {
	return (
		<div className='calcaulator-container'>
			{data.map((item) => {
				return <HintBox key={item.id} handleChange={handleChange} {...item} />;
			})}
			<HouseSvg className='house-svg' />
		</div>
	);
}

export default House;
