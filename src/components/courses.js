import React ,{useState}from 'react'
import {courseDetails} from '../api/courseDetails'
import Button from '@material-ui/core/Button';
import ValidateTextField from '../common/validateTextFields';
import { PanToolSharp } from '@material-ui/icons';

const EditCourses=(props)=>{
    const[name, setName]=useState("");
    const[price, setPrice]=useState("");
    

    const handleClick=()=>{
      courseDetails(name, price);
      // props.setShowCourses=false;
      
    }
    return <div>
  <ValidateTextField value={name}
          onChange={(value) => setName(value)}
          validate={() => { return name === '' }}
          errorMessage={'שדה חובה'} 
          lable={"שם הקורס"}/>
         

<ValidateTextField value={price}
          onChange={(value) => setPrice(value)}
          validate={() => { return price === '' }}
          errorMessage={'שדה חובה'} 
          lable={"מחיר הקורס "}/>       
    <Button variant="contained" color="primary" onClick={handleClick}>הוספה למערכת</Button>

    </div>
}
export default EditCourses;