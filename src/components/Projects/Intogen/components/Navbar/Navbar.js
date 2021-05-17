import React, {useState} from 'react';
import {Link, Router, NavLink} from 'react-router-dom';
//import {FaBars, FaTimes} from 'react-icons/fa';
import MenuItems from './MenuItems';
import './Navbar.css';
import logo from './logo.png';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
            </nav> */}








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
                <span>Nationality</span>
            </div> 

            <div className="chooseNationality">
                Choose a Nationality: 
            </div>
            <div class="col-lg-3">
                <select id = "countryCmbBox" class="form-control countrypicker" data-live-search="true">
                </select>
            </div>
            {/* <hr class="border"/> */}



            <div className="cards">
                <p className="cardsTitle">Kolb's Learning Style</p>
                <hr className="borderCards"></hr>
                <Button className="wholeCard">
                    <Card className="root">
                        <CardContent>
                            <Typography className="title" gutterBottom>
                                ACTIVISTS
                            </Typography>
                            <Typography className="subTitle">
                                (Concrete experiencer/ Active experimenter)
                            </Typography>
                        </CardContent>
                    </Card>
                </Button>

                <Button className="wholeCard">
                    <Card className="root">
                        <CardContent>
                            <Typography className="title" gutterBottom>
                                THEORISTS
                            </Typography>
                            <Typography className="subTitle">
                                (Abstract conceptualiser/Reflective observer)   
                            </Typography>
                        </CardContent>
                    </Card>
                </Button>

                <Button className="wholeCard">
                    <Card className="root">
                        <CardContent>
                            <Typography className="title" gutterBottom>
                                REFLECTORS
                            </Typography>
                            <Typography className="subTitle">
                                (Concrete experiencer/Reflective observer)
                            </Typography>
                        </CardContent>
                    </Card>
                </Button>

                <Button className="wholeCard">
                    <Card className="root">
                        <CardContent>
                            <Typography className="title" gutterBottom>
                                PRAGMATISTS
                            </Typography>
                            <Typography className="subTitle">
                            (Abstract conceptualization/ Active experimenter)
                            </Typography>
                        </CardContent>
                    </Card>
                </Button>
            </div>
        </nav>
    
    ); 
};

export default Navbar;