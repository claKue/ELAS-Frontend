import React from 'react';
import '../../Intogen.css'
import img2 from '../assets/unilogo.png'
import Footer from '../Footer'
import { makeStyles } from '@material-ui/core/styles';
import { ExpressionRunner } from 'survey-react';

 export default function AboutUs() {

    return (
        <>
        <hr class="border2" data-content="About Us"/>
        <div className="aboutUs-container">
        <span className="subTitle">Welcome to <b>Intogen </b></span><br/>
        </div>
        <img className="imageAboutus" src={img2} alt="unilogo" />
            <p className="aboutusText">
            Intogen was originally programmed by students from University Duisburg-Essen's ISE program Computer Engineering department (CE) major (Intelligent Networked Systems).
    The web application was programmed under the supervision of Prof. Dr. Mohamed Amine Chatti. <br/> <br/>
    To provide this application, the students needed to collect data from other ISE students, for which they used Sample Surveys method. <br/>
    You can see the survey questions under <a className="aboutUsFindType" href="/findyourtype">Find Your Type</a>. <br/>
    Each participants information will be handled anonymously. The data will be used for visual analytics to help students find their learning styles and check their suggested courses.
    Teachers and organisations can also use the service to improve learning experience of students later on when the web service is developed. <br/> <br/>
    Intogen was later on updated by bachelor Komedia students. Their goal was to implement Intogen into the ELAS platform and improve this web application.
    Prof. Dr. Mohamed Amine Chatti was also the supervisor in this project. <br/> <br/>
            </p>
           <Footer/>
        </>
    )
}

