import React from 'react';
import '../../Intogen.css'
import Footer from '../Footer'
import img1 from '../assets/learning_styles.png';
import Icons from '../Icons';
import { AppContainer } from '../Cards/AppContainer';

export default function Home() {
    return (
        <>
            <hr class="border2" data-content="Home"/>
            <div className="page-container">
                
                    <span className="subTitle">Welcome to <b>Intogen </b></span><br/>
                    <hr class="border4"/>
                    <p className="text-container">
                        Intogen is David Kolb's research based web service, which helps ISE students of the University Duisburg-Essen
                        to identify their preferred Learning Styles. The Learning style's data will be used to provide an overview on the basis of their nationalities and education.
                        After completing the survey, students are able to see suggested courses they might like to study based on their Learning Style. <br/><br/>
                        Following datasets are included: <br/>
                        1- Nationality <br/>
                        2- Education<br/>
                        3- Course suggestion with Learning Styles (Find Your Type)
                    </p>
                
                <img className="image" src={img1} alt="learning styles" />

                <hr class="border1"/>
                <b className="descriptions">Learn more about Kolb's Learning Styles:</b>
             

                {/* style zu singleCards siehe Intogen.css */}
                <div className="Cards"> 

                <AppContainer />
                </div>
                <Icons/>
            </div>
            <Footer /> 
        </>
    )
}