import React from 'react';
import styled from 'styled-components';
import { Accordion, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { AiOutlineTable } from 'react-icons/ai';
import { HiChevronRight } from 'react-icons/hi';
import { GiPieChart } from 'react-icons/gi';

const Container = styled.div`
	width: 250px;
	background-color: var(--main-bg-color);
	height: calc(100vh - 60px);
	color: white;

	.card {
		background-color: transparent;

		.card-header {
			padding: 0.6rem;
		}

		.collapse,
		.collapsing {
			background-color: var(--dark-bg-color);

			.card-body {
				padding: 0.6rem 1rem;

				div {
					padding: 0;
					margin: 0.4rem;
				}
			}
		}
	}
`;

const LinkContainer = styled.div`
	padding: 0.6rem;
	display: flex;
	align-content: center;

	a {
		color: white;
		width: 100%;
		text-decoration: none;
		transition: var(--color-transition), background-color 0.3s;
		display: block;
		padding: 0.75rem 1.25rem;
		border-radius: 8px;

		&.selected,
		&:hover {
			color: var(--light-blue-color);
			background-color: var(--light-bg-color);
		}
	}
`;

const ToggleMenuItem = styled.div`
	display: flex;
	padding: 0.75rem 1.25rem;
	border-radius: 8px;
	&:hover {
		color: var(--light-blue-color);
		background-color: var(--light-bg-color);
		cursor: pointer;
	}

	.flex-item {
		flex: 1;
	}

	svg {
		width: 20px;
		height: 20px;
		align-self: center;
	}

	.menu-icon {
		margin-right: 13px;
		width: 25px;
		height: 25px;
	}
`;

function Sidebar() {
	return (
		<Container>
			<Accordion>
				<LinkContainer>
					<NavLink exact to='/' activeClassName='selected'>
						Dashboard
					</NavLink>
				</LinkContainer>

				<Card>
					<Accordion.Toggle as={Card.Header} eventKey='0'>
						<ToggleMenuItem>
							<AiOutlineTable className='menu-icon' />
							<div className='flex-item'>Tables</div>
							<HiChevronRight className='test' />
						</ToggleMenuItem>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey='0'>
						<Card.Body>
							<LinkContainer>
								<NavLink to='/tableData' activeClassName='selected'>
									Table with records
								</NavLink>
							</LinkContainer>
							<LinkContainer>
								<NavLink to='/table2' activeClassName='selected'>
									Table with people
								</NavLink>
							</LinkContainer>
							<LinkContainer>
								<NavLink to='/table3' activeClassName='selected'>
									Table with data
								</NavLink>
							</LinkContainer>
						</Card.Body>
					</Accordion.Collapse>
				</Card>

				<LinkContainer>
					<NavLink to='/charts' activeClassName='selected'>
						Something
					</NavLink>
				</LinkContainer>

				<Card>
					<Accordion.Toggle as={Card.Header} eventKey='1'>
						<ToggleMenuItem>
							<GiPieChart className='menu-icon' />
							<div className='flex-item'>Tables</div>
							<HiChevronRight className='test' />
						</ToggleMenuItem>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey='1'>
						<Card.Body>
							<LinkContainer>
								<NavLink to='/chart1' activeClassName='selected'>
									Pie chart
								</NavLink>
							</LinkContainer>
							<LinkContainer>
								<NavLink to='/chart2' activeClassName='selected'>
									Flow chart
								</NavLink>
							</LinkContainer>
							<LinkContainer>
								<NavLink to='/chart3' activeClassName='selected'>
									Circle chart
								</NavLink>
							</LinkContainer>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Container>
	);
}

export default Sidebar;
