import React ,{useState}from 'react'
import {modelDetails} from '../api/modelDetails'
import Button from '@material-ui/core/Button';
import ValidateTextField from '../common/validateTextFields';

const Models=(props)=>{
    const[year, setYear]=useState('');
    const[branch, setBranch]=useState('');
    const[morningEvening, setMorningEvening]=useState('');
    

    const handleClick=()=>{
      modelDetails(year, branch, morningEvening);
       props.setShowModel(false);
      
    }
    return <div>
  <ValidateTextField value={year}
          onChange={(value) => setYear(value)}
          validate={() => { return year === '' }}
          errorMessage={'שדה חובה'} 
          lable={"שנת לימוד"}/>
         

<ValidateTextField value={branch}
          onChange={(value) => setBranch(value)}
          validate={() => { return branch === '' }}
          errorMessage={'שדה חובה'} 
          lable={"סניף "}/> 

          
<ValidateTextField value={morningEvening}
          onChange={(value) => setMorningEvening(value)}
          validate={() => { return morningEvening === '' }}
          errorMessage={'שדה חובה'} 
          lable={"בוקר/ערב "}/>         
    <Button variant="contained" color="primary" onClick={handleClick}>הוספה למערכת</Button>

    </div>
}
export default Models;