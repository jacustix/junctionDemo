import React from 'react';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../../logo.svg';
import { FaUserCircle } from 'react-icons/fa';

const Container = styled.div`
	background-color: var(--main-bg-color);
	height: 60px;

	.navbar {
		padding: 0;
	}

	a {
		color: white;
		text-decoration: none;
		transition: var(--color-transition);

		&:hover {
			color: var(--light-blue-color);
		}
	}
`;

const LogoImage = styled.img`
	height: 50px;
	-webkit-animation: spin 6s linear infinite;
	-moz-animation: spin 6s linear infinite;
	animation: spin 6s linear infinite;

	@-moz-keyframes spin {
		100% {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`;

const UserInfo = styled.div`
	color: white;
	padding-right: 2rem;

	svg {
		width: 30px;
		height: 30px;
		margin-right: 12px;
		color: var(--light-blue-color);
	}
`;

function Header() {
	return (
		<Container>
			<Navbar className='justify-content-between'>
				<Navbar.Brand>
					<Link to='/'>
						<LogoImage src={Logo} />
						Brand Name
					</Link>
				</Navbar.Brand>
				<UserInfo>
					<FaUserCircle />
					Koso Roland
				</UserInfo>
			</Navbar>
		</Container>
	);
}

export default Header;
