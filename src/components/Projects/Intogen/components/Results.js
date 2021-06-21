import * as React from 'react';
import LearningCards from './LearningCards'
import Diagram from './diagrams/nationality/Diagram'
import Form from 'react-bootstrap/Form'
import './Results.css';

export default function Nationality() {
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
                        <Diagram />
                    </div>

                    <h4 className="titles">Change combinations for different suggestions:</h4>
                    <div className="textDescription">
                        On changing combinations you will see matching 
                        courses with highest percentage of students 
                        matching to your types from your study program. 
                    </div>

                    <div className="checkBoxes">
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Activist" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Reflector" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Pragmatist" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Theorist" />
                        </Form.Group>
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
                        <Diagram />
                    </div>

                    <h4 className="titles">Suggested courses weightage:</h4>
                    <div className="textDescription">
                        Suggested courses percentages 
                        depends on number of students in that course, 
                        which means that if there is only one student in a course 
                        then the percentage will obviously be high but the weightage will be low.  
                    </div>

                    <div className="diagram-container">
                        <Diagram />
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