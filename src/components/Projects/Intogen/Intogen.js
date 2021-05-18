import React, {Component} from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Nationality from './components/Visualization/Nationality/Nationality';
import Education from './components/Visualization/Education/Education';
import FindYourType from './components/FindYourType/FindYourType';
import About from './components/About/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import logo from './logo.png';

//import { NavigationContainer, Link } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

class Intogen extends Component {
  render() {
      return (
        <div className="page-container">
          <div className="content-wrap">
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home">
                  <img className="logo" src={logo} alt="Logo" />
                  INTOGEN
                </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                  <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.Nav.Link href="#features">HOME</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.NavDropdown title="VISUALIZATION" id="collasible-nav-dropdown">
                      <ReactBootStrap.NavDropdown.Item href="Nationality.js" >NATIONALITY</ReactBootStrap.NavDropdown.Item>
                      <ReactBootStrap.NavDropdown.Item href="#action/3.2">EDUCATION DEGREE</ReactBootStrap.NavDropdown.Item>
                      
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.Nav.Link href="#features">FIND YOUR TYPE</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#features">ABOUT US</ReactBootStrap.Nav.Link>
                  </ReactBootStrap.Nav>
                  
                </ReactBootStrap.Navbar.Collapse>
              </ReactBootStrap.Navbar>
           <Router>
            {/* <Navbar />  */}
            
          </Router>
          </div>
           {/* <Footer /> */}
        </div>
      );
  }
}

export default Intogen;