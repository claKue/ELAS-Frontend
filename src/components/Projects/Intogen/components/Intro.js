import React from 'react';
import '../Intogen.css';
import './Intro.css';
import img1 from '../components/assets/learning_styles.png'


function Intro() {

    return (
        <div className="intro-container">
            <p>
                Intogen is David Kolb's research based web service, which helps ISE students of the University Duisburg-Essen
                to identify their preferred Learning Styles. The Learning style's data will be used to provide an overview on the basis of their nationalities and education.
                After completing the survey, students are able to see suggested courses they might like to study based off of their Learning Style. <br/><br/>
                Dataset overview: <br/>
                1- Nationality <br/>
                2- Education<br/>
                3- Course suggestion with Learning Styles
                <img className="imageHome" src={img1} alt="learning styles" />

                <hr class="border1"/>
                <b className="descriptions">Following are the descriptions of Kolb's learning styles:</b>
           </p>
        </div>
    )
}

export default Intro
