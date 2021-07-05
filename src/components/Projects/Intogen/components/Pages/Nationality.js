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
    const [average, setAverage] = useState([]);

    const [amountmales, setAmountmales] = useState();
    const [amountfemales, setAmountfemales] = useState();

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

        const nationalityFemales = filter.filter(t=>t.Gender ==='Female');

        let amountMales = nationalityMales.length
        let amountFemales = nationalityFemales.length


        // Male Average Nationality Activist
        let activistSumMales = 0;
        for(let i = 0; i<amountMales; i++) {
            activistSumMales += nationalityMales[i].Activist
        }
        let activistAverageMales = activistSumMales / amountMales
        // console.log("Activist Average Males: " + activistAverageMales)

        // Female Average Nationality Activist
        let activistSumFemales = 0;
        let activistAverageFemales = 0;
        if (amountFemales !== 0) {
            for(let i = 0; i<amountFemales; i++) {
                activistSumFemales += nationalityFemales[i].Activist
            }
            activistAverageFemales = activistSumFemales / amountFemales
        }
        // console.log("Activist Average Females: " + activistAverageMales)

        // Male Average Nationality Reflector
        let reflectorSumMales = 0;
        for(let i = 0; i<amountMales; i++) {
            reflectorSumMales += nationalityMales[i].Reflector
        }
        let reflectorAverageMales = reflectorSumMales / amountMales
        // console.log("Reflector Average Males: " + reflectorAverageMales)

        // // Female Average Nationality Reflector
        let reflectorSumFemales = 0;
        let reflectorAverageFemales = 0;
        if (amountFemales !== 0) {
            for(let i = 0; i<amountFemales; i++) {
                reflectorSumFemales += nationalityFemales[i].Reflector
            }
            reflectorAverageFemales = reflectorSumFemales / amountFemales
        }
        // console.log("Reflector Average Females: " + reflectorAverageMales)

        // Male Average Nationality Theorist
        let theoristSumMales = 0;
        for(let i = 0; i<amountMales; i++) {
            theoristSumMales += nationalityMales[i].Theorist
        }
        let theoristAverageMales = theoristSumMales / amountMales
        // console.log("Theorist Average Males: " + theoristAverageMales)

        // // Female Average Nationality Theorist
        let theoristSumFemales = 0;
        let theoristAverageFemales = 0;
        if (amountFemales !== 0) {
            for(let i = 0; i<amountFemales; i++) {
                theoristSumFemales += nationalityFemales[i].Theorist
            }
            theoristAverageFemales = theoristSumFemales / amountFemales
        }
        // console.log("Theorist Average Females: " + theoristAverageMales)

        // Male Average Nationality Pragmatist
        let pragmatistSumMales = 0;
        for(let i = 0; i<amountMales; i++) {
            pragmatistSumMales += nationalityMales[i].Pragmatist
        }
        let pragmatistAverageMales = pragmatistSumMales / amountMales
        // console.log("Pragmatist Average Males: " + pragmatistAverageMales)

        // Female Average Nationality Pragmatist
        let pragmatistSumFemales = 0;
        let pragmatistAverageFemales = 0;
        if (amountFemales !== 0) {
            for(let i = 0; i<amountFemales; i++) {
                pragmatistSumFemales += nationalityFemales[i].Pragmatist
            }
            pragmatistAverageFemales = pragmatistSumFemales / amountFemales
        }
        // console.log("Pragmatist Average Females: " + pragmatistAverageMales)


        // Average Activist
        let averageActivist = (activistAverageMales + activistAverageFemales) / 2

        // Average Reflector
        let averageReflector = (reflectorAverageMales + reflectorAverageFemales) / 2

        // Average Theorist
        let averageTheorist = (theoristAverageMales + theoristAverageFemales) / 2

        // Average Pragmatist
        let averagePragmatist = (pragmatistAverageMales + pragmatistAverageFemales) / 2

        if (amountFemales == 0) {
            averageActivist = activistAverageMales
            averageReflector = reflectorAverageMales
            averageTheorist = theoristAverageMales
            averagePragmatist = pragmatistAverageMales
        }


        setMales([activistAverageMales, reflectorAverageMales, theoristAverageMales, pragmatistAverageMales])
        setFemales([activistAverageFemales, reflectorAverageFemales, theoristAverageFemales, pragmatistAverageFemales])
        setAverage([averageActivist, averageReflector, averageTheorist, averagePragmatist])

        setAmountmales(amountMales)
        setAmountfemales(amountFemales)
        
        setCategory(['Activist','Reflector','Theorist','Pragmatist'])
    }

    
    // console.log(option)
    

    return (  
        <> 
            <hr class="border2" data-content="Nationality"/>
            <div className="page-container">
                <div className="leftSide">
                    <h4>Choose your <b>Nationality:</b></h4>
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
                    <p className="subtitlesDiagram">
                        Following are the learning types' averages of your <span className="underlined">nationality.</span>
                    </p>
                    <hr class="border"/>
                    <div className="diagram-container">
                        <Diagram females={females} males={males} average = {average} amountmales= {amountmales} 
                        amountfemales= {amountfemales} categories={category}/>
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




