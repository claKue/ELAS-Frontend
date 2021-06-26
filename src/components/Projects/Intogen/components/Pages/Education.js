import React, {useState} from 'react';
import '../../Intogen.css'
import LearningCards from '../LearningCards'
import Footer from '../Footer'
import Diagram from '../diagrams/nationality/Diagram'
import data from '../diagrams/data/out';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export default function Education() {

    const [females, setFemales] = useState([]);
    const [males, setMales] = useState([]);
    const [average, setAverage] = useState([]);

    const [amountmales, setAmountmales] = useState();
    const [amountfemales, setAmountfemales] = useState();

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

    const study_programMales = filter.filter(t=>t.Gender ==='Male');
        console.log(study_programMales)

        const study_programFemales = filter.filter(t=>t.Gender ==='Female');
        console.log(study_programFemales)

        let amountMales = study_programMales.length
        let amountFemales = study_programFemales.length
        console.log(amountMales)
        console.log(amountFemales)


        // Male, Activist Average (Study Program)
        let activistSumMales = 0;
        for(let i = 0; i<study_programMales.length; i++) {
            activistSumMales += study_programMales[i].Activist
        }
        let activistAverageMales = activistSumMales / study_programMales.length
        // console.log("Activist Average Males: " + activistAverageMales)


         // Female, Activist Average (Study Program)
         let activistSumFemales = 0;
         for(let i = 0; i<study_programFemales.length; i++) {
             activistSumFemales += study_programFemales[i].Activist
         }
         let activistAverageFemales = activistSumFemales / study_programFemales.length
         // console.log("Activist Average Females: " + activistAverageFemales)


        // Male, Reflector Average (Study Program)
        let reflectorSumMales = 0;
        for(let i = 0; i<study_programMales.length; i++) {
            reflectorSumMales += study_programMales[i].Reflector
        }
        let reflectorAverageMales = reflectorSumMales / filter.length
        // console.log("Reflector Average Males: " + reflectorAverageMales)

         // Female, Reflector Average (Study Program)
         let reflectorSumFemales = 0;
         for(let i = 0; i<study_programFemales.length; i++) {
             reflectorSumFemales += study_programFemales[i].Reflector
         }
         let reflectorAverageFemales = reflectorSumFemales / filter.length
         // console.log("Reflector Average Females: " + reflectorAverageFemales)

         // Male, Theorist Average (Study Program)
         let theoristSumMales = 0;
         for(let i = 0; i<study_programMales.length; i++) {
             theoristSumMales += study_programMales[i].Theorist
         }
         let theoristAverageMales = theoristSumMales / filter.length
         // console.log("Theorist Average Males: " + theoristAverageMales)

          // Female, Theorist Average (Study Program)
          let theoristSumFemales = 0;
          for(let i = 0; i<study_programFemales.length; i++) {
              theoristSumFemales += study_programFemales[i].Theorist
          }
          let theoristAverageFemales = theoristSumFemales / filter.length
          // console.log("Theorist Average Females: " + theoristAverageFemales)

          // Male, Pragmatist Average (Study Program)
         let pragmatistSumMales = 0;
         for(let i = 0; i<study_programMales.length; i++) {
             pragmatistSumMales += study_programMales[i].Pragmatist
         }
         let pragmatistAverageMales = pragmatistSumMales / filter.length
         // console.log("Pragmatist Average Males: " + pragmatistAverageMales)

          // Female, Pragmatist Average (Study Program)
          let pragmatistSumFemales = 0;
          for(let i = 0; i<study_programFemales.length; i++) {
              pragmatistSumFemales += study_programFemales[i].Pragmatist
          }
          let pragmatistAverageFemales = pragmatistSumFemales / filter.length
          // console.log("Pragmatist Average Females: " + pragmatistAverageFemales)

        // Average Activist
        let averageActivist = (activistAverageMales + activistAverageFemales) / 2

        // Average Reflector
        let averageReflector = (reflectorAverageMales + reflectorAverageFemales) / 2

        // Average Theorist
        let averageTheorist = (theoristAverageMales + theoristAverageFemales) / 2

        // Average Pragmatist
        let averagePragmatist = (pragmatistAverageMales + pragmatistAverageFemales) / 2

        setMales([activistAverageMales, reflectorAverageMales, theoristAverageMales, pragmatistAverageMales])
        setFemales([activistAverageFemales, reflectorAverageFemales, theoristAverageFemales, pragmatistAverageFemales])
        setAverage([averageActivist, averageReflector, averageTheorist, averagePragmatist])

        setAmountmales(amountMales)
        setAmountfemales(amountFemales)
        
        setCategory(['Activist','Reflector','Theorist','Pragmatist'])

}


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
            <Footer />
        </>
    );
    }

