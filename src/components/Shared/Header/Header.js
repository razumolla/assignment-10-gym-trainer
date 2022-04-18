import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };


    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        ZACSON
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="services">Services</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about">About-Me</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="signin">
                                        Sign-In
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;