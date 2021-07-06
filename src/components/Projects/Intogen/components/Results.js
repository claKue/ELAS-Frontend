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


    // const [activist, setActivist] = useState([]);
    // const [reflector, setReflector] = useState([]);
    // const [theorist, setTheorist] = useState([]);
    // const [pragmatist, setPragmatist] = useState([]);

    // const [scoreAc, setScoreAc] = useState([]);
    // const [scoreRef, setScoreRef] = useState([]);
    // const [scoreTheo, setScoreTheo] = useState([]);
    // const [scorePrag, setScorePrag] = useState([]);

    // const [score, setScore] = useState([]);

    // setActivist([activistScore])
    // setReflector([reflectorScore])
    // setTheorist([theoristScore])
    // setPragmatist([pragmatistScore])


    const data =  [53, 22, 13, 40]
    const output = 
        {
        "Activist":{
            "2":0,
            "4":0,
            "10":10,
            "13":0,
            "18":10,
            "21":0,
            "24":10,
            "30":0,
            "37":10,
            "39":0 
        },
        "Reflector":{
            "5":10,
            "9":0,
            "14":0,
            "16":0,
            "17":0,
            "20":0,
            "25":0,
            "29":0,
            "33":0,
            "34":10
        },
        "Theorist":{
            "1":0,
            "6":0,
            "8":10,
            "11":10,
            "15":10,
            "22":0,
            "27":10,
            "32":10,
            "35":0,
            "40":0
        },
        "Pragmatist":{
            "3":0,
            "7":0,
            "12":0,
            "19":0,
            "23":10,
            "26":10,
            "28":10,
            "31":0,
            "36":0,
            "38":0
        },
    
        }
    
        const values = Object.values(output)
        const activist = values[0]
        // console.log(Object.values(activist))
        const ac = Object.values(activist)
        let Activist = 0
        ac.forEach(d => {
            Activist = Activist + d
        })
        console.log("Summe Activist: " + Activist)
        // setScoreAc(Activist)


        const reflector = values[1]
        // console.log(Object.values(reflector))
        const ref = Object.values(reflector)
        let Reflector = 0
        ref.forEach(d => {
            Reflector = Reflector + d
        })
        console.log("Summe Reflector: " + Reflector)
        // setScoreRef(Reflector)


        const theorist = values[2]
        // console.log(Object.values(theorist))
        const theo = Object.values(theorist)
        let Theorist = 0
        theo.forEach(d => {
            Theorist = Theorist + d
        })
        console.log("Summe Theorist: " + Theorist)
        // setScoreTheo(Theorist)


        const pragmatist = values[3]
        // console.log(Object.values(pragmatist))
        const prag = Object.values(pragmatist)
        let Pragmatist = 0
        prag.forEach(d => {
            Pragmatist = Pragmatist + d
        })
        console.log("Summe Pragmatist: " + Pragmatist)
        // setScorePrag(Pragmatist)

        
        let resultsLearningStyle = []
        resultsLearningStyle.push(Activist)
        resultsLearningStyle.push(Reflector)
        resultsLearningStyle.push(Theorist)
        resultsLearningStyle.push(Pragmatist)
        console.log(resultsLearningStyle)

        // setScore(resultsLearningStyle)


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
                        <ResultsDiagram />
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