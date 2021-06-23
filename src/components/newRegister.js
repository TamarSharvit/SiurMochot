import React, { useState } from 'react';
// import '../css/registersHomePage.css';
import '../css/newRegister.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import ValidateTextField from '../common/validateTextFields';
import { addRegisterToData } from '../api/newRegisterApi';
import TextArea from './textArea.js';
const NewRegister=(props)=>{
    //פרטי תלמידה
    const [id, setId] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [sex, setSex] = useState('');
    const [leadSource, setLeadSource] = useState('');
    const [additionalPhone, setAdditionalPhone] = useState('');
    const [foreignBirthDate, setForeignBirthDate] = useState('');
    const [hebrowBirthDate, setHebrowBirthDate] = useState('');
    const [note, setNote] = useState('');

    const handleClick = () => {
        debugger;
        addRegisterToData(id, fName, lName, email, phone, sex, leadSource, additionalPhone, foreignBirthDate , hebrowBirthDate, note );
        props.setShowNewUser(false);

       
    }

    return<div>
    <div className="div2">
    <h2>פרטי תלמידה</h2>
   
    <ValidateTextField value={id}
        onChange={(value) => setId(value)}
        validate={() => { return id === '' }}
        errorMessage={'שדה חובה'} 
        lable={"תעודת זהות"}/>

    {/* <TextField id="outlined-basic" label="מספר זהות" variant="outlined" /> */}
   
    {/* <TextField id="outlined-basic" label="שם פרטי" variant="outlined" /> */}

    <ValidateTextField value={fName}
        onChange={(value) => setFName(value)}
        validate={() => { return fName === '' }}
        errorMessage={'שדה חובה'} 
        lable={"שם פרטי"}
        />
        
  
    <ValidateTextField value={lName}
        onChange={(value) => setLName(value)}
        validate={() => { return lName === '' }}
        errorMessage={'שדה חובה'}
        lable={"שם משפחה"} />
          

   
    <ValidateTextField value={email}
        onChange={(value) => setEmail(value)}
        validate={() => { return email === '' }}
        errorMessage={'שדה חובה'} 
        lable={"מייל"}/>

   
    <ValidateTextField value={phone}
        onChange={(value) => setPhone(value)}
        validate={() => { return phone === '' }}
        errorMessage={'שדה חובה'}
        lable={"פלאפון"} />
   <br></br>
    <ValidateTextField value={additionalPhone}
        onChange={(value) => setAdditionalPhone(value)}
        validate={() => { return additionalPhone === '' }}
        errorMessage={'שדה חובה'}
        lable={"טלפון נוסף"} />
 
  
    <ValidateTextField value={sex}
        onChange={(value) => setSex(value)}
        validate={() => { return sex === '' }}
        errorMessage={'שדה חובה'}
        lable={"מין"} />
  

    <ValidateTextField value={hebrowBirthDate}
        onChange={(value) => setHebrowBirthDate(value)}
        validate={() => { return hebrowBirthDate === '' }}
        errorMessage={'שדה חובה'} 
        lable={"תאריך לידה עברי"}/>
  

    <ValidateTextField value={foreignBirthDate}
        onChange={(value) => setForeignBirthDate(value)}
        validate={() => { return foreignBirthDate === '' }}
        errorMessage={'שדה חובה'}
        lable={"תאריך לידה לועזי"} />
 

  
    <ValidateTextField value={leadSource}
        onChange={(value) => setLeadSource(value)}
        validate={() => { return leadSource === '' }}
        errorMessage={'שדה חובה'}
        lable={"מקור ליד"} />
   
<br></br>
    <ValidateTextField value={note}
        onChange={(value) => setNote(value)}
        validate={() => { return note === '' }}
        errorMessage={'שדה חובה'}
        lable={"הערה"} /> 
       
       <TextArea text="הערה"/>

</div>
<Button variant="contained" color="primary" onClick={handleClick}>הוספה למערכת</Button>

</div> }
export default NewRegister;
   