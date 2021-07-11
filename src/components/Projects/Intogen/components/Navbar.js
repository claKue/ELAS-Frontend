import React, {useState} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import './Navbar.css';
import {NavDropdown} from 'react-bootstrap'
import logo from './assets/logo.jpg'
import logoNew from './assets/image0.jpeg'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 
    const closeMobileMenu = () => setClick(false);

    return (   
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img className="logoNav"src={logoNew} style={{ width:300 }} alt="Logo"/>
                    </Link>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <NavDropdown title="VISUALIZATION" bsPrefix="nav-links" >
                                <Link to="/nationality" className="nav-dropdown"  onClick={closeMobileMenu}>
                                    NATIONALITY
                                </Link>
                                <Link to="/education" className="nav-dropdown"  onClick={closeMobileMenu}>
                                    EDUCATION DEGREE
                                </Link>
                            </NavDropdown>
                        </li>

                        <li className="nav-item">
                            <Link to="/findyourtype" className="nav-links" onClick={closeMobileMenu}>
                                FIND YOUR TYPE 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
                                ABOUT US
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
