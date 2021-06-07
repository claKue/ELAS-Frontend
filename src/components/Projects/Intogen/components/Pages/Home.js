import React from 'react';
import '../../Intogen.css'
import Cards from '../Cards';
import Footer from '../Footer'
import img1 from '../assets/learning_styles.png';


export default function Home() {
    return (
        <>
            <hr class="border2" data-content="Home"/>
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
                <img className="imageHome" src={img1} alt="learning styles" />

                <hr class="border1"/>
                <b className="descriptions">Learn more about Kolb's Learning Styles:</b>
            </p> 
            <Cards />
            <Footer /> 
        </>
    )
}