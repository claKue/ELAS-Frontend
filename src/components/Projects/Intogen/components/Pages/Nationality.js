import * as React from 'react';
import '../../Intogen.css'
import Footer from '../Footer'
import LearningCards from '../LearningCards'
import Diagram from '../diagrams/nationality/Diagram'
import data from '../diagrams/data/out';

export default function Nationality() {

    console.log(data[0].Nationality);

    // [
    //     {nationality: 'Pakistan'},
    //     {nationality: 'Germany'}
    // ]

    return (  
        <> 
            <hr class="border2" data-content="Nationality"/>
            <div className="page-container">
                <div className="leftSide">
                    <h4>Choose a Nationality:</h4>
                    <div class="boxes">
                        <select id="countryBox">
                            <option value="None"></option>
                            <option value="Countries">*Countries*</option>
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
            <Footer/> 
        </>
    );
}
