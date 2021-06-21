import * as React from 'react';
import '../../Intogen.css'
import Footer from '../Footer'
import LearningCards from '../LearningCards'
import Diagram from '../diagrams/nationality/Diagram'
import data from '../diagrams/data/out';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import DiagramTesting from '../DiagramTesting'



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

    const uniqueNationalities = getUnique(data,'Nationality');  
  
    // [
    //     {nationality: 'Pakistan'},
    //     {nationality: 'Germany'}
    // ]

    const handleSelect = (events, values) => {
        const filter = data.filter(a => a.Nationality == values.Nationality)
        
        let activistAverage = 0;
        for(let i = 0; i<filter.length; i++) {
            // filter[i].Activist
            activistAverage += filter[i].Activist
        }
        let result = activistAverage / filter.length
        
        console.log(filter)
        console.log(result.toFixed(2))
    }
        
    

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
                            getOptionLabel={(option) => option.Nationality} 
                            style={{ width: 200 }}
                            size= {"small"}
                            onChange={handleSelect}
                            renderInput={(params) => <TextField {...params} label="Nationality" variant="outlined" />}
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
            <DiagramTesting />

            <Footer/> 
        </>
    );
}




