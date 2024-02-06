import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import FavoriteButton from '../views/FavoriteButton.jsx'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarMenu() {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	return (
		<Navbar expand="lg" className="bg-body-tertiary navbar">
			<Container>
				<Navbar.Brand onClick={() => navigate('/')}>Home</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link onClick={() => navigate('/films')}>Films</Nav.Link>
						<NavDropdown title="Categories" id="basic-nav-dropdown">
							<NavDropdown.Item onClick={() => navigate('/characters')}>Charachters</NavDropdown.Item>
							<NavDropdown.Item onClick={() => navigate('/planets')}>Planets</NavDropdown.Item>
							<NavDropdown.Item onClick={() => navigate('/vehicles')}>Vehicles</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item onClick={() => navigate('/')}>
								Home
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				<FavoriteButton />
			</Container>
		</Navbar>
	);
}

export default NavbarMenu;


