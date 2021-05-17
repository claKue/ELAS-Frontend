import React, {Component} from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Nationality from './components/Visualization/Nationality/Nationality';
import Education from './components/Visualization/Education/Education';
import FindYourType from './components/FindYourType/FindYourType';
import About from './components/About/About';

class Intogen extends Component {
  render() {
      return (
        <div className="page-container">
          <div className="content-wrap">
    
           <Router>
            <Navbar />
           </Router>
          </div>
           <Footer />
           {/* <div>
             <Router basename="/">
               <Navbar />
               <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route path="/Visualization" component={Visualization}/>
                 <Route path="/Nationality" component={Nationality}/>
                 <Route path="/Education" component={Education}/>
                 <Route path="/FindYourType" component={FindYourType}/>
                 <Route path="/About" component={About}/>
               </Switch>
             </Router>
           </div> */}
    
        </div>
      );
  }
}

export default Intogen;