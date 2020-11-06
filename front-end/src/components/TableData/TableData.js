import React, { useMemo, useState } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import { Form, Col } from 'react-bootstrap';

import { FaLongArrowAltUp } from 'react-icons/fa';
import { FaLongArrowAltDown } from 'react-icons/fa';
import MOCK_DATA from '../../MOCK_DATA.json';
import { COLUMNS } from './columns';
import GlobalFilter from './GlobalFilter';

function TableData() {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);
	const [searchField, setSearchField] = useState(true);

	const tableInstance = useTable(
		{
			columns,
			data,
		},
		useGlobalFilter,
		useSortBy
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter,
	} = tableInstance;

	const { globalFilter } = state;

	const Container = styled.div`
		.table {
			overflow: hidden;
			border-radius: 8px;
			box-shadow: var(--box-shadow);
		}
	`;

	const handleChange = (e) => {
		e.target.id === 'global' ? setSearchField(true) : setSearchField(false);
	};

	return (
		<>
			<fieldset onChange={handleChange}>
				<Form.Group>
					<Form.Label as='legend'>Radios</Form.Label>
					<Col>
						<Form.Check
							type='radio'
							label='Global filter search field'
							name='searchFieldChange'
							id='global'
							defaultChecked
						/>
						<Form.Check
							type='radio'
							label='second radio'
							name='searchFieldChange'
							id='column'
						/>
					</Col>
				</Form.Group>
			</fieldset>

			{searchField ? (
				<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
			) : (
				''
			)}

			<Container>
				<Table variant='dark' {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => {
							return (
								<tr {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map((column) => {
										return (
											<th
												{...column.getHeaderProps(
													column.getSortByToggleProps()
												)}
											>
												{column.render('Header')}
												<span>
													{column.isSorted ? (
														column.isSortedDesc ? (
															<FaLongArrowAltUp />
														) : (
															<FaLongArrowAltDown />
														)
													) : (
														''
													)}
												</span>
											</th>
										);
									})}
								</tr>
							);
						})}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</Table>
			</Container>
		</>
	);
}

export default TableData;
