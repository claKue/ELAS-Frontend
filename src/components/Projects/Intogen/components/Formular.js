import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Formular.css';
import data from '../components/diagrams/data/out'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';


export default function Formular() {

    function getUnique(arr, index) {
        const unique = arr
             .map(e => e[index])
             // store the keys of the unique objects
             .map((e, i, final) => final.indexOf(e) === i && i)
             // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);      
        return unique;
      }
      
      const uniqueCourses = getUnique(data,'Subject1');  
      const major = getUnique(data, 'Major');
      const uniqueStudyPrograms = getUnique(data,'Study_program'); 
      
      // console.log(uniqueCourses);

      const [value, setValue] = React.useState('female');

      const handleChange = (event) => {
        setValue(event.target.value);
      };


    return (
        <>
             
                        <span>What are you currently studying?</span>
                        <Autocomplete
                            className="personalInformation"
                            id="combo-box-demo"
                            options={major}
                            getOptionLabel={(option) => option.Major} 
                            style={{ width: 400, marginRight: 10 }}
                            size= {"small"}
                            renderInput={(params) => <TextField {...params} label="Major" variant="outlined" />}
                        />
                        <span>Please choose your study program.</span>
                        <Autocomplete
                            className="personalInformation"
                            id="combo-box-demo"
                            options={uniqueStudyPrograms}
                            getOptionLabel={(option) => option.Study_program} 
                            style={{ width: 400, marginRight: 10 }}
                            size= {"small"}
                            renderInput={(params) => <TextField {...params} label="Study program" variant="outlined" />}
                        />       
                        <span>Please choose a course which you liked the most.</span>             
                        <Autocomplete
                            className="personalInformation"
                            id="combo-box-demo"
                            options={uniqueCourses}
                            getOptionLabel={(option) => option.Subject1} 
                            style={{ width: 400, marginRight: 10 }}
                            size= {"small"}
                            renderInput={(params) => <TextField {...params} label="Courses" variant="outlined" />}
                        />
                        <span>Please choose a course which you disliked the most.</span>             
                        <Autocomplete
                            className="personalInformation"
                            id="combo-box-demo"
                            options={uniqueCourses}
                            getOptionLabel={(option) => option.Subject1} 
                            style={{ width: 400, marginRight: 10 }}
                            size= {"small"}
                            renderInput={(params) => <TextField {...params} label="Courses" variant="outlined" />}
                        />
                        <span>Please name your gender.</span>
                        <div className="gender"> 
                            <FormControl component="fieldset">
                                <RadioGroup row value={value} onChange={handleChange}>
                                    <FormControlLabel value="female" control={<Radio style ={{ color: "rgb(255, 102, 0)" }}/>} label="Female" />
                                    <FormControlLabel value="male" control={<Radio style ={{ color: "rgb(255, 102, 0)" }}/>} label="Male" />
                                    <FormControlLabel value="other" control={<Radio style ={{ color: "rgb(255, 102, 0)" }}/>} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    
            

        </>
    );
    }