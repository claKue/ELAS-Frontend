import React, {useState} from 'react';
import '../../Intogen.css'
import Footer from '../Footer'
import LearningCards from '../LearningCards'
import Diagram from '../diagrams/nationality/Diagram'
import data from '../diagrams/data/out';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Nationality() {

    const [females, setFemales] = useState([]);
    const [males, setMales] = useState([]);
    const [category, setCategory] = useState([]);

    // eliminates all duplicate countries
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

        const nationalityMales = filter.filter(t=>t.Gender ==='Male');
        console.log("This are the males from this nationality: ", nationalityMales)

        const nationalityFemales = filter.filter(t=>t.Gender ==='Female');
        console.log("This are the females from this nationality: ", nationalityFemales)



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

         

        const nothing = 0;




        // Male Average Nationality Activist
        let activistSumMales = 0;
        for(let i = 0; i<nationalityMales.length; i++) {
            activistSumMales += nationalityMales[i].Activist
        }
        let activistAverageMales = activistSumMales / nationalityMales.length
        // console.log("Activist Average Males: " + activistAverageMales)

        // Female Average Nationality Activist
        let activistSumFemales = 0;
        for(let i = 0; i<nationalityFemales.length; i++) {
            activistSumFemales += nationalityFemales[i].Activist
        }
        let activistAverageFemales = activistSumFemales / nationalityFemales.length
        // console.log("Activist Average Females: " + activistAverageMales)

        // Male Average Nationality Reflector
        let reflectorSumMales = 0;
        for(let i = 0; i<nationalityMales.length; i++) {
            reflectorSumMales += nationalityMales[i].Reflector
        }
        let reflectorAverageMales = reflectorSumMales / nationalityMales.length
        // console.log("Reflector Average Males: " + reflectorAverageMales)

        // // Female Average Nationality Reflector
        let reflectorSumFemales = 0;
        for(let i = 0; i<nationalityFemales.length; i++) {
            reflectorSumFemales += nationalityFemales[i].Reflector
        }
        let reflectorAverageFemales = reflectorSumFemales / nationalityFemales.length
        // console.log("Reflector Average Females: " + reflectorAverageMales)

        // Male Average Nationality Theorist
        let theoristSumMales = 0;
        for(let i = 0; i<nationalityMales.length; i++) {
            theoristSumMales += nationalityMales[i].Theorist
        }
        let theoristAverageMales = theoristSumMales / nationalityMales.length
        // console.log("Theorist Average Males: " + theoristAverageMales)

        // // Female Average Nationality Theorist
        let theoristSumFemales = 0;
        for(let i = 0; i<nationalityFemales.length; i++) {
            theoristSumFemales += nationalityFemales[i].Theorist
        }
        let theoristAverageFemales = theoristSumFemales / nationalityFemales.length
        // console.log("Theorist Average Females: " + theoristAverageMales)

        // Male Average Nationality Pragmatist
        let pragmatistSumMales = 0;
        for(let i = 0; i<nationalityMales.length; i++) {
            pragmatistSumMales += nationalityMales[i].Pragmatist
        }
        let pragmatistAverageMales = pragmatistSumMales / nationalityMales.length
        // console.log("Pragmatist Average Males: " + pragmatistAverageMales)

        // Female Average Nationality Pragmatist
        let pragmatistSumFemales = 0;
        for(let i = 0; i<nationalityFemales.length; i++) {
            pragmatistSumFemales += nationalityFemales[i].Pragmatist
        }
        let pragmatistAverageFemales = pragmatistSumFemales / nationalityFemales.length
        // console.log("Pragmatist Average Females: " + pragmatistAverageMales)

        setMales([activistAverageMales, reflectorAverageMales, theoristAverageMales, pragmatistAverageMales])
        setFemales([activistAverageFemales, reflectorAverageFemales, theoristAverageFemales, pragmatistAverageFemales])
        setCategory(['Activist','Reflector','Theorist','Pragmatist'])
    }

    
    // console.log(option)
    

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
                        <Diagram females={females} males={males} categories={category}/>
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




