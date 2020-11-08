import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { MdDashboard } from 'react-icons/md';

const Container = styled.div`
	width: 300px;
	background-color: var(--main-bg-color);
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
	margin: 0.6rem;

	align-content: center;

	a {
		color: white;
		flex: 1;
		text-decoration: none;
		padding: 0.75rem 1.25rem;
		display: flex;
		border-radius: 8px;
		transition: var(--color-transition), background-color 0.3s;

		&.selected,
		&:hover {
			color: var(--light-blue-color);
			background-color: var(--light-bg-color);
			cursor: pointer;
		}
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
		<Container style={window.outerHeight.height}>
			<Accordion>
				<LinkContainer>
					<NavLink exact to='/' activeClassName='selected'>
						<MdDashboard className='menu-icon' />
						Dashboard
					</NavLink>
				</LinkContainer>
			</Accordion>
		</Container>
	);
}

export default Sidebar;
