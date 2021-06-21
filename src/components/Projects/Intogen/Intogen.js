import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Intogen.css';
import Home from './components/Pages/Home'
import Visualization from './components/Pages/Visualization'
import Nationality from './components/Pages/Nationality'
import Education from './components/Pages/Education'
import FindYourType from './components/Pages/FindYourType'
import AboutUs from './components/Pages/AboutUs'

import CardsActivists from '../Intogen/components/Cards/CardsActivists'
import CardsReflectors from '../Intogen/components/Cards/CardsReflectors'
import CardsTheorists from '../Intogen/components/Cards/CardsTheorists'
import CardsPragmatists from '../Intogen/components/Cards/CardsPragmatists'


import Footer from '../Intogen/components/Footer'
import img1 from '../Intogen/components/assets/learning_styles.png'


import Icons from '../Intogen/components/Icons'

function Intogen() {
  return (
      <>
        <Router>
          <Navbar/> 
          <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/visualization" component={Visualization} />
            <Route path="/nationality" component={Nationality} />
            <Route path="/education" component={Education} />
            <Route path="/findyourtype" component={FindYourType} />
            <Route path="/aboutus" component={AboutUs} />
          </Switch>
        </Router>
            <hr class="border2" data-content="Home"/>
            <div className="page-container">
                
                    <span className="subTitle">Welcome to <b>Intogen </b></span><br/>
                    <hr class="border4"/>
                    <p className="text-container">
                        Intogen is David Kolb's research based web service, which helps ISE students of the University Duisburg-Essen
                        to identify their preferred Learning Styles. The Learning style's data will be used to provide an overview on the basis of their nationalities and education.
                        After completing the survey, students are able to see suggested courses they might like to study based off of their Learning Style. <br/><br/>
                        Dataset overview: <br/>
                        1- Nationality <br/>
                        2- Education<br/>
                        3- Course suggestion with Learning Styles
                    </p>
                
                <img className="image" src={img1} alt="learning styles" />

                <hr class="border1"/>
                <b className="descriptions">Learn more about Kolb's Learning Styles:</b>
             

                {/* style zu singleCards siehe Intogen.css */}
                <div className="singleCards"> 
                    <CardsActivists />
                    <CardsReflectors />
                    <CardsPragmatists />
                    <CardsTheorists />
                </div>
                <Icons/>
            </div>
            <Footer /> 
        </>
    )
}

export default Intogen;