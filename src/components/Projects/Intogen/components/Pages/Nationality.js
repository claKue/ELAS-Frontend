import React, {useState} from 'react';
import '../../Intogen.css'
import Footer from '../Footer'
import LearningCards from '../LearningCards'
import Diagram from '../diagrams/nationality/Diagram'
import data from '../diagrams/data/out';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Nationality() {

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

    const uniqueNationalities = getUnique(data,'Nationality');  
  

    const handleSelect = (events, values) => {
        const filter = data.filter(a => a.Nationality == values.Nationality)
        console.log(filter)

        // // filter males for average
        // const maleFilter = (a) => {
        //     return a.Gender == "Male";
        // }

        // let males = data.filter(maleFilter);
        // console.log(males);

        // // filter females for average
        // const femaleFilter = (a) => {
        //     return a.Gender == "Female";
        // }

        // let females = data.filter(femaleFilter);
        // console.log(females);

        
        // Male Average Nationality Activist
        let activistSum = 0;
        for(let i = 0; i<filter.length; i++) {
            activistSum += filter[i].Activist
        }
        let activistAverage = activistSum / filter.length
        console.log("Activist Average: " + activistAverage)

        // // Female Average Nationality Activist
        // let activistSum = 0;
        // for(let i = 0; i<filter.length; i++) {
        //     activistSum += filter[i].Activist
        // }
        // let activistAverage = activistSum / filter.length

        // Male Average Nationality Reflector
        let reflectorSum = 0;
        for(let i = 0; i<filter.length; i++) {
            reflectorSum += filter[i].Reflector
        }
        let reflectorAverage = reflectorSum / filter.length
        console.log("Reflector Average: " + reflectorAverage)

        // // Female Average Nationality Reflector
        // let reflectorSum = 0;
        // for(let i = 0; i<filter.length; i++) {
        //     reflectorSum += filter[i].Reflector
        // }
        // let reflectorAverage = reflectorSum / filter.length

        // Male Average Nationality Theorist
        let theoristSum = 0;
        for(let i = 0; i<filter.length; i++) {
            theoristSum += filter[i].Theorist
        }
        let theoristAverage = theoristSum / filter.length
        console.log("Theorist Average: " + theoristAverage)

        // // Female Average Nationality Theorist
        // let theoristSum = 0;
        // for(let i = 0; i<filter.length; i++) {
        //     theoristSum += filter[i].Theorist
        // }
        // let theoristAverage = theoristSum / filter.length

        // Male Average Nationality Pragmatist
        let pragmatistSum = 0;
        for(let i = 0; i<filter.length; i++) {
            pragmatistSum += filter[i].Pragmatist
        }
        let pragmatistAverage = pragmatistSum / filter.length
        console.log("Pragmatist Average: " + pragmatistAverage)

        setOption([activistAverage, reflectorAverage, theoristAverage, pragmatistAverage])
        setCategory(['Activist','Reflector','Theorist','Pragmatist'])

        // // Female Average Nationality Pragmatist
        // let pragmatistSum = 0;
        // for(let i = 0; i<filter.length; i++) {
        //     pragmatistSum += filter[i].Pragmatist
        // }
        // let pragmatistAverage = pragmatistSum / filter.length

    }

    
    console.log(option)
    

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
            <Footer/> 
        </>
    );
}




