import React, { useState } from 'react';
import LearningCards from './LearningCards'
import Diagram from './diagrams/nationality/Diagram'
import './Results.css';
import ResultsDiagram from '../components/ResultsDiagram';
import ResultsCourses from './ResultsCourses';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import FindYourType from '../components/Pages/FindYourType'

export default function Nationality() {

    const [activist, setActivist] = useState([]);
    const [reflector, setReflector] = useState([]);
    const [theorist, setTheorist] = useState([]);
    const [pragmatist, setPragmatist] = useState([]);

    // setActivist([activistScore])
    // setReflector([reflectorScore])
    // setTheorist([theoristScore])
    // setPragmatist([pragmatistScore])






    return (  
        <> 
                <div className="leftSide">
                    <h4>Results of your test</h4>
                    <div className="textDescription">
                        Following chart shows your preferred 
                        learning styles and high percentage 
                        of type which reflects your general 
                        approach towards learning.
                    </div>
                    <div className="diagram-container">
                        <ResultsDiagram activists={activist} reflectors={reflector} 
                            theorists={theorist} pragmatists={pragmatist} />
                    </div>

                    <h4 className="titles">Change combinations for different suggestions:</h4>
                    <div className="textDescription">
                        On changing combinations you will see matching 
                        courses with highest percentage of students 
                        matching to your types from your study program. 
                    </div>

                    <div className="checkBoxes">
                        <FormGroup>
                            <FormControlLabel control={<Checkbox style ={{ color: "rgb(255, 102, 0)" }}/>} label="Activist" />
                            <FormControlLabel control={<Checkbox style ={{ color: "rgb(255, 102, 0)" }} />} label="Reflector" />
                            <FormControlLabel control={<Checkbox style ={{ color: "rgb(255, 102, 0)" }} />} label="Pragmatist" />
                            <FormControlLabel control={<Checkbox style ={{ color: "rgb(255, 102, 0)" }} />} label="Theorist" />
                        </FormGroup>
                    </div>

                    <h4 className="titles">Suggested courses:</h4>
                    <div className="textDescription">
                        Following courses are estimated by comparing your style 
                        scores with student's style scores present in that specific 
                        course. High percentage courses are those courses which has 
                        more similar learners like you. <br/> <br/>
                        Note: This estimation does not guarantee that you will 
                        score a good GPA in the courses, it suggests that you may 
                        enjoy studying the course, taking your learning styles in consideration.  
                    </div>

                    <div className="diagram-container">
                        <ResultsCourses />
                    </div>

                    <h4 className="titles">Suggested courses weightage:</h4>
                    <div className="textDescription">
                        Suggested courses percentages 
                        depends on number of students in that course, 
                        which means that if there is only one student in a course 
                        then the percentage will obviously be high but the weightage will be low.  
                    </div>

                    <div className="diagram-container">
                        <ResultsCourses />
                    </div>
                </div>
                
                <div className="rightSide">
                    <h4>Kolb's Learning Styles</h4>
                    <hr class="border1"/>
                    <div className="cards1">
                        <LearningCards/>
                    </div>
                </div>       
        </>
    );
}