import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'; 
import { Link, useLocation } from 'react-router-dom';  
import '../componentsCss/Header.css';

const ZwolfHeader = () => {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Ensure initial state is set correctly
        } else {
            setScrolled(true); // Ensure header is black on other routes
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    return (
        <Navbar
            expand="lg"
            className={`nav-main ${location.pathname === '/' && !scrolled ? 'transparent' : 'black'} ${expanded ? 'expanded' : ''}`}
            fixed="top"
            expanded={expanded} 
        >
            <div className='container-fluid ms-3'>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
                    <img 
                        alt=""
                        src="/images/logo.jpeg"
                        width="50"
                        height="50"
                        className="d-inline-block align-top rounded-circle me-3 logo"
                    />
                    <span className="h4 mb-0">Zwolf Consultancy Service</span>
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={() => setExpanded(!expanded)} 
                    className="navbar-toggler-custom"
                >
                    <FaBars size={30} />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto nav-items">
                        <Nav.Link as={Link} to="/" className="main-li" onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/services" className="main-li" onClick={() => setExpanded(false)}>Services</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="main-li" onClick={() => setExpanded(false)}>About</Nav.Link>
                        <Nav.Link as={Link} to="/contact-us" className="main-li" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default ZwolfHeader;
