import React, { useState, useEffect } from 'react';
import ValidateTextField from '../common/validateTextFields';
import Button from '@material-ui/core/Button';
import {signup} from '../api/loginApi';
const NewUser=()=>{

    const [id, setId] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const cheackValidation=(value)=>{
        return value === ''; 
    }
    
    const handleClick = () => {
        if(!(cheackValidation(id)&&cheackValidation(fName)&&cheackValidation(lName)&&cheackValidation(email)&&cheackValidation(password))){
            signup(id, fName, lName, email, password);
        }
    }

    return <div>
        <div>מספר זהות</div>
            <ValidateTextField value={id}
                onChange={(value) => setId(value)}
                validate={() => cheackValidation(id)}
                errorMessage={'שדה חובה'} />

        <div>שם פרטי</div>
                    <ValidateTextField value={fName}
                        onChange={(value) => setFName(value)}
                        validate={() => cheackValidation(fName)}
                        errorMessage={'שדה חובה'} />

        <div>שם משפחה</div>
                    <ValidateTextField value={lName}
                        onChange={(value) => setLName(value)}
                        validate={() =>cheackValidation(lName)}
                        errorMessage={'שדה חובה'} />

        <div>מייל</div>
                     <ValidateTextField value={email}
                     onChange={(value) => setEmail(value)}
                     validate={() => cheackValidation(email)}
                     errorMessage={'שדה חובה'} />

        <div>סיסמה</div>
                    <ValidateTextField value={password}
                     onChange={(value) => setPassword(value)}
                    validate={() => cheackValidation(password)}
                    errorMessage={'שדה חובה'} />
<br></br>
<Button className="button" variant="contained" color="default" onClick={handleClick}>הוספת משתמש למערכת</Button>
            </div>
        }

    export default NewUser;