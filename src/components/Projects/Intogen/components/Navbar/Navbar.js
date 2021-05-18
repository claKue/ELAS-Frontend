import React, {useState} from 'react';
import {Link, Router, NavLink} from 'react-router-dom';
//import {FaBars, FaTimes} from 'react-icons/fa';
import MenuItems from './MenuItems';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {

    const [click, setClick] = useState()

    const clickHandler = () => {
        setClick(!click);
    }
    return (
        <nav className="nav">

            


             {/* <nav>
                <ul>
                    <li><NavLink to={'/'}> HOME </NavLink></li>
                    <li> VISUALIZATION
                        <ul>
                            <li><NavLink to={'/Nationality'}>NATIONALITY</NavLink></li>
                            <li><NavLink to={'/Education'}>EDUCATION DEGREE</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to={'/FindYourType'}> FIND YOUR TYPE </NavLink></li>
                    <li><NavLink to={'/About'}> ABOUT US </NavLink></li>
                </ul>
            </nav>  */}

            <div className="nav-center container">
                <img className="logo" src={logo} alt="Logo" />
    
                <ul className={click? "nav-list active": "nav-list"}>
                    {MenuItems.map(({id, title, cName}) => 
                        <li key={id} className="nav-item">
                            <Link className={cName}>{title}</Link>
                        </li>
                    )}
                </ul>

                <div onClick={clickHandler} className="hamburger">{click}</div>

                {/* hinter click muss eigentlich: <FaTimes/>: <FaBars/> (Probleme beim installieren) */}
            </div>



            
            <div className="separator">
                <span>title</span>
            </div> 
        </nav>
    
            // hier könnt ihr euren Code reintippen, um zu sehen, ob es funktioniert
    ); 
};

export default Navbar;