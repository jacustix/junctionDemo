import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useAsyncDebounce } from 'react-table';

import { BiSearchAlt } from 'react-icons/bi';

function GlobalFilter({ filter, setFilter }) {
	const [value, setValue] = useState(filter);

	const onChange = useAsyncDebounce((value) => {
		setFilter(value || '');
	}, 300);

	return (
		<Form.Group>
			<Form.Label>Searh field</Form.Label>
			<InputGroup>
				<InputGroup.Prepend>
					<InputGroup.Text id='search-in-data'>
						<BiSearchAlt />
					</InputGroup.Text>
				</InputGroup.Prepend>
				<Form.Control
					value={value || ''}
					onChange={(e) => {
						setValue(e.target.value);
						onChange(e.target.value);
					}}
					placeholder='Search in table data'
				/>
			</InputGroup>
		</Form.Group>
	);
}

export default GlobalFilter;
