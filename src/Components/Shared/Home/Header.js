import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container-fluid">
                    <Nav.Link className="navbar-brand" to="/">Navbar</Nav.Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                < FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                            </li>
                            <li className="nav-item px-4">
                                <button>Log in</button>
                            </li>
                            <li className="nav-item">
                                <button>Sign Out</button>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;