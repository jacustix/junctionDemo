import React, { useState } from 'react';

function FormsComponent() {
	const [text, setText] = useState('');
	const [number, setNumber] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const dataComp = { text: text, number: number };
		const url = 'http://127.0.0.1:8000/hackback/postuserdata';
		const data = JSON.stringify(dataComp);
		const otherParams = {
			body: data,
			method: 'POST',
		};

		fetch(url, otherParams)
			.then((data) => {
				console.log(data.json());
			})
			.catch((error) => console.log(error));
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
