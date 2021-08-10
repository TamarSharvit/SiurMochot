import React ,{useState}from 'react'
import {editStatus} from '../api/editStatus'
import Button from '@material-ui/core/Button';
import ValidateTextField from '../common/validateTextFields';

const Status=(props)=>{
    const[name, setName]=useState('');
    const[code, setCode]=useState(0);
    

    const handleClick=()=>{
      editStatus(name, code);
       props.setShowStatus(false);
      
    }
    return <div>
  <ValidateTextField value={name}
          onChange={(value) => setName(value)}
          validate={() => { return name === '' }}
          errorMessage={'שדה חובה'} 
          lable={"סטטוס"}/>
         

<ValidateTextField value={code}
          onChange={(value) => setCode(value)}
          validate={() => { return code === 0 }}
          errorMessage={'שדה חובה'} 
          lable={"קוד סטטוס"}/>       
    <Button variant="contained" color="primary" onClick={handleClick}>הוספה למערכת</Button>

    </div>
}
export default Status;