import React, { useState, useEffect } from 'react';
import LearningCards from '../Cards/LearningCards'
import './Results.css';
import ResultsDiagram from './ResultsDiagram';
import ResultsCourses from './ResultsCourses';
import ResultsWeightage from './ResultsWeightage';
import data from '../Diagrams/Data/out'

// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

export default function Results({ dataR }) {

    const [results, setResults] = useState([]);
    const [category, setCategory] = useState([]);
    const [courses, setCourses] = useState([]);
    const [coursesPercentage, setCoursesPercentage] = useState([]);
    const [weightage, setWeightage] = useState([]);

    // const [state, setState] = useState({
    //     checkedA: true,
    //     checkedR: true,
    //     checkedT: true,
    //     checkedP: true,
    //   });

    // const handleChange = (event) => {
    //     setState({ ...state, [event.target.name]: event.target.checked });
    // };

    useEffect(() => {
        const values = Object.values(dataR)
        console.log(values)
        
        const ac = Object.values(values[0])
        let Activist = 0
        ac.forEach(d => {
            Activist = Activist + d
        })

        const ref = Object.values(values[1])
        let Reflector = 0
        ref.forEach(d => {
            Reflector = Reflector + d
        })

        const theo = Object.values(values[2])
        let Theorist = 0
        theo.forEach(d => {
            Theorist = Theorist + d
        })

        const prag = Object.values(values[3])
        let Pragmatist = 0
        prag.forEach(d => {
            Pragmatist = Pragmatist + d
        })
 
        let resultsLearningStyle = []
        resultsLearningStyle.push(Activist)
        resultsLearningStyle.push(Reflector)
        resultsLearningStyle.push(Theorist)
        resultsLearningStyle.push(Pragmatist)

        setResults(resultsLearningStyle)
        setCategory(['Activist','Reflector','Theorist','Pragmatist'])
        console.log(resultsLearningStyle)

        let suggestedCourses = []
        let coursePerc = []
        let simAct = []
        let simRefl = []
        let simTheo = []
        let simPrag = []

        let relevantCourses = []
        for(let i = 0; i<data.length; i++) {
            if (values[5] === data[i].Study_program) {
                if(data[i].Subject1 !== "INVALID" && data[i].Subject2 !== "INVALID") {
                    relevantCourses.push(data[i].Subject1)
                    relevantCourses.push(data[i].Subject2)
                }
            }
        }
        console.log(relevantCourses)

        for(let i = 0; i<data.length; i++) {
            if(data[i].Subject1 !== "INVALID" || data[i].Subject2 !== "INVALID") {
                if(data[i].Activist === resultsLearningStyle[0]) {
                        suggestedCourses.push(data[i].Subject1)
                        suggestedCourses.push(data[i].Subject2)
                        simAct.push(100 - Math.abs(data[i].Activist - resultsLearningStyle[0]));
                } else if (data[i].Activist === (resultsLearningStyle[0] + 10)) {
                        suggestedCourses.push(data[i].Subject1)
                        suggestedCourses.push(data[i].Subject2)
                        simAct.push(100 - Math.abs(data[i].Activist - resultsLearningStyle[0]));
                } else if (data[i].Activist === (resultsLearningStyle[0] - 10)) {
                        suggestedCourses.push(data[i].Subject1)
                        suggestedCourses.push(data[i].Subject2)
                        simAct.push(100 - Math.abs(data[i].Activist - resultsLearningStyle[0]));
                }
                
                if(data[i].Reflector === resultsLearningStyle[1]) {
                        suggestedCourses.push(data[i].Subject1)
                        suggestedCourses.push(data[i].Subject2)
                        simRefl.push(100 - Math.abs(data[i].Reflector - resultsLearningStyle[1]));
                } else if (data[i].Reflector === (resultsLearningStyle[1] + 10)) {
                        suggestedCourses.push(data[i].Subject1)
                        suggestedCourses.push(data[i].Subject2)
                        simRefl.push(100 - Math.abs(data[i].Reflector - resultsLearningStyle[1]));
                } else if (data[i].Reflector === (resultsLearningStyle[1] - 10)) {
                        suggestedCourses.push(data[i].Subject1)
                        suggestedCourses.push(data[i].Subject2)
                        simRefl.push(100 - Math.abs(data[i].Reflector - resultsLearningStyle[1]));
                } 

                if(data[i].Theorist === resultsLearningStyle[2]) {
                        suggestedCourses.push(data[i].Subject1)
                        suggestedCourses.push(data[i].Subject2)
                        simTheo.push(100 - Math.abs(data[i].Theorist - resultsLearningStyle[2]));
                } else if (data[i].Theorist === (resultsLearningStyle[2] + 10)) {
                        suggestedCourses.push(data[i].Subject1)
                        suggestedCourses.push(data[i].Subject2)
                        simTheo.push(100 - Math.abs(data[i].Theorist - resultsLearningStyle[2]));
                } else if (data[i].Theorist === (resultsLearningStyle[2] - 10)) {
                        suggestedCourses.push(data[i].Subject1)
                        suggestedCourses.push(data[i].Subject2)
                        simTheo.push(100 - Math.abs(data[i].Theorist - resultsLearningStyle[2]));
                } 

                if(data[i].Pragmatist === resultsLearningStyle[3]) {
                        suggestedCourses.push(data[i].Subject1)
                        suggestedCourses.push(data[i].Subject2)
                        simPrag.push(100 - Math.abs(data[i].Pragmatist - resultsLearningStyle[3]));
                } else if (data[i].Pragmatist === (resultsLearningStyle[3] + 10)) {
                        suggestedCourses.push(data[i].Subject1)
                        suggestedCourses.push(data[i].Subject2)
                        simPrag.push(100 - Math.abs(data[i].Pragmatist - resultsLearningStyle[3]));
                } else if (data[i].Pragmatist === (resultsLearningStyle[3] - 10)) {
                        suggestedCourses.push(data[i].Subject1)
                        suggestedCourses.push(data[i].Subject2)
                        simPrag.push(100 - Math.abs(data[i].Pragmatist - resultsLearningStyle[3]));
                } 
            } 
        }

        console.log(simAct)
        console.log(simRefl)
        console.log(simTheo)
        console.log(simPrag)  

        // hier sollen die irrelevanten Kurse aus dem suggestedCourses array entfernt werden
        // Theorie: Wenn suggestedCourse an der Stelle x NICHT in relevantCourses, dann aus Array löschen 
        // relevantCourses und suggestedCourses funktionieren einzeln super, jetzt nur noch kombinieren
        for(let x = 0; x<suggestedCourses.length; x++) {
            if (suggestedCourses.indexOf(x) not in relevantCourses) {
                // 'not in' geht nicht
                // Funktion, mit der man einzelne Elemente aus Array entfernen kann, gibt es nicht
                // hier muss so etwas in der Art hin: 
                // suggestedCourses[x].delete
            }
        }



        const test = [0, 1, 2]
        if (0 in test) {
            console.log("in funktioniert")
        }


        // Durchschnitt, der für Diagramm genutzt wird
        // Anzahl des Durchschnitts Arrays muss so lang sein wie suggestedCourses!!!
        let average = []
        for(let i = 0; i<suggestedCourses.length; i++) {
            let sum = simAct[i] + simRefl[i] + simTheo[i] + simPrag[i]
            average.push(sum/4)
        }
        console.log(average)
        
        let uniqueCourses = [...new Set(suggestedCourses)]
       
        let position = uniqueCourses.indexOf('INVALID');
        let removed = uniqueCourses.splice(position, 1);
      
        console.log(uniqueCourses)
        setCourses(uniqueCourses)
        setCoursesPercentage(average)

        // Weightage
        let weightageCounter = 0
        let weightage = []
        for(let z = 0; z<uniqueCourses.length; z++) {
            weightageCounter = 0
            for(let i = 0; i<data.length; i++) {
                if(uniqueCourses[z] === data[i].Subject1 || uniqueCourses[z] === data[i].Subject2) {
                    weightageCounter += 1
                }
            }
            weightage.push(weightageCounter)
        }
        console.log(weightage)
        setWeightage(weightage)

    }, []);


    return (  
        <> 
            <div className="leftSide">
                <h4 className="headLiner">Results of your test</h4>
                <div className="textDescription">
                    Following chart shows your preferred 
                    learning styles and high percentage 
                    of type which reflects your general 
                    approach towards learning.
                </div>
                <div className="diagram-container">
                    {results.length !== 0 ? <> 
                        <ResultsDiagram data={results} categories={category} /> 
                    </> : <> </>}
                </div>
                {/* <h4 className="titles">Change combinations for different suggestions:</h4>
                <div className="textDescription">
                    On changing combinations you will see matching 
                    courses with highest percentage of students 
                    matching to your types from your study program. 
                </div>
                <div className="checkBoxes">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox name="checkedA" checked={state.checkedA} onChange={handleChange} style ={{ color: "rgb(255, 102, 0)" }} />} label="Activist" />
                        <FormControlLabel control={<Checkbox name="checkedR" checked={state.checkedR} onChange={handleChange} style ={{ color: "rgb(255, 102, 0)" }} />} label="Reflector" />
                        <FormControlLabel control={<Checkbox name="checkedT" checked={state.checkedT} onChange={handleChange} style ={{ color: "rgb(255, 102, 0)" }} />} label="Theorist" />
                        <FormControlLabel control={<Checkbox name="checkedP" checked={state.checkedP} onChange={handleChange} style ={{ color: "rgb(255, 102, 0)" }} />} label="Pragmatist" />
                    </FormGroup>
                </div> */}
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
                    <ResultsCourses courses={courses} percentages={coursesPercentage}/>
                </div>
                <h4 className="titles">Suggested courses weightage:</h4>
                <div className="textDescription">
                    Suggested courses percentages 
                    depends on number of students in that course, 
                    which means that if there is only one student in a course 
                    then the percentage will obviously be high but the weightage will be low.  
                </div>
                <div className="diagram-container">
                    <ResultsWeightage courses={courses} weightages={weightage} />
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