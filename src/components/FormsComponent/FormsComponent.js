import React, { useState } from 'react';

function FormsComponent() {
	const [text, setText] = useState('');
	const [number, setNumber] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('something');
	};

	const textChange = (e) => {
		setText(e.target.value);
	};

	const numberChange = (e) => {
		setNumber(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder='Text input'
				type='text'
				value={text || ''}
				onChange={textChange}
			/>
			<input
				placeholder='Number input'
				type='number'
				value={number || ''}
				onChange={numberChange}
			/>
			<input type='submit' />
		</form>
	);
}

export default FormsComponent;
