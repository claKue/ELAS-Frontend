import React from 'react';
import '../../Intogen.css'
import LearningCards from '../LearningCards'
import Footer from '../Footer'
import Diagram from '../diagrams/nationality/Diagram'

export default function Education() {
    return (
        <>
            <hr class="border2" data-content="Education"/>
            <div className="page-container">
                <div className="leftSide">
                    <h4>Choose your Education Degree:</h4>
                    <div class="boxes">
                        <select className="selectBox">
                            <option value="0">ISE</option>
                        </select>
                        <select className="selectBox">
                            <option value="None"></option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Master">Master</option>
                        </select>
                        <select className="selectBox">
                            <option value="None"></option>
                            <option value="Program">*Study Programm*</option>
                        </select>
                        <hr class="border"/>
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
            </div>
            <Footer />
        </>
    );
}