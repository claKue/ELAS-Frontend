import * as React from 'react';
import '../../Intogen.css'
import Footer from '../Footer'
import LearningCards from '../LearningCards'
import Diagram from '../diagrams/nationality/Diagram'
import data from '../diagrams/data/out';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Nationality() {
    // console.log(data[0].Nationality);

    
    function getUnique(arr, index) {

        const unique = arr
             .map(e => e[index])
      
             // store the keys of the unique objects
             .map((e, i, final) => final.indexOf(e) === i && i)
      
             // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);      
      
         return unique;
    }

    // hier müsstet ihr dann statt Nationality Study Program o.ä. nehmen (genau so benannt wie in out.js)
    const uniqueNationalities = getUnique(data,'Nationality');  
  
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
                        <Autocomplete
                            id="combo-box-demo"
                            options={uniqueNationalities}
                            // hier statt option.Nationality dann option.Study_program o.ä.
                            getOptionLabel={(option) => option.Nationality} 
                            style={{ width: 200 }}
                            renderInput={(params) => <TextField {...params} label="Countries" variant="outlined" />}
                        />
                    </div>
                    <hr class="border"/>
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
