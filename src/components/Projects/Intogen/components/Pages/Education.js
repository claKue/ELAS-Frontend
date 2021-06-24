
import React, {useState} from 'react';
import '../../Intogen.css'
import LearningCards from '../LearningCards'
import Footer from '../Footer'
import Diagram from '../diagrams/nationality/Diagram'

import data from '../diagrams/data/out';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Education() {

    const [option, setOption] = useState([]);
    const [category, setCategory] = useState([]);

    function getUnique(arr, index) {
        const unique = arr
             .map(e => e[index])
             // store the keys of the unique objects
             .map((e, i, final) => final.indexOf(e) === i && i)
             // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);      
        return unique;
    }

    const uniqueStudyPrograms = getUnique(data,'Study_program');  
    const major = getUnique(data, 'Major');
    
    const handleSelect = (events, values) => {
    const filter = data.filter(a => a.Study_program == values.Study_program)

        let activistSum = 0;
        for(let i = 0; i<filter.length; i++) {
            activistSum += filter[i].Activist
        }
        let activistAverage = activistSum / filter.length
        console.log("Activist Average: " + activistAverage)


        let reflectorSum = 0;
        for(let i = 0; i<filter.length; i++) {
            reflectorSum += filter[i].Reflector
        }
        let reflectorAverage = reflectorSum / filter.length
        console.log("Reflector Average: " + reflectorAverage)


        let theoristSum = 0;
        for(let i = 0; i<filter.length; i++) {
            theoristSum += filter[i].Theorist
        }
        let theoristAverage = theoristSum / filter.length
        console.log("Theorist Average: " + theoristAverage)


        let pragmatistSum = 0;
        for(let i = 0; i<filter.length; i++) {
            pragmatistSum += filter[i].Pragmatist
        }
        let pragmatistAverage = pragmatistSum / filter.length
        console.log("Pragmatist Average: " + pragmatistAverage)

        setOption([activistAverage, reflectorAverage, theoristAverage, pragmatistAverage])
        setCategory(['Activist','Reflector','Theorist','Pragmatist'])

}

console.log(option)

    return (
        <>
            <hr class="border2" data-content="Education"/>
            <div className="page-container">
                <div className="leftSide">
                    <h4>Choose your Education Degree:</h4>
                    <div class="boxes">                   
                        <Autocomplete
                            id="combo-box-demo"
                            options={major}
                            getOptionLabel={(option) => option.Major} 
                            style={{ width: 200, marginRight: 10 }}
                            size= {"small"}
                            onChange = {handleSelect}
                            renderInput={(params) => <TextField {...params} label="Major" variant="outlined" />}
                        />                    
                        <Autocomplete
                            id="combo-box-demo"
                            options={uniqueStudyPrograms}
                            getOptionLabel={(option) => option.Study_program} 
                            style={{ width: 400, marginRight: 10 }}
                            size= {"small"}
                            onChange={handleSelect}
                            renderInput={(params) => <TextField {...params} label="Study program" variant="outlined" />}
                        />
                    </div>
                    <hr class="border"/>
                    <div className="diagram-container">
                    <Diagram options={option} categories={category}/>
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

