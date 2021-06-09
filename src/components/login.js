import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ValidateTextField from '../common/validateTextFields';
import { loginToServer, signup } from '../api/loginApi';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();
    const handleClick = () => {
        //Validation - if email and pwd are VALID 
        signup(userName, password).then((res) => {
            debugger
            history.push("/registersHomePage");
        }).catch(() => {
            //Handle error
        })
    }

    return (<div>
        <div>שם משתמש</div>
        <ValidateTextField value={userName}
            onChange={(value) => setUserName(value)}
            validate={cheackValidName}
            errorMessage={'שדה חובה'} />
        <br />

        <div>סיסמה</div>
        <ValidateTextField value={password}
            onChange={(value) => setPassword(value)}
            validate={cheackValidPass}
            errorMessage={'חייב להכיל לפחות 6 תוים'} />
        <br />
        <Button variant="contained" color="primary" onClick={handleClick}>כניסה</Button>
        <br/>
        <Button variant="contained" color="default" onClick={handleClick}>משתמש חדש</Button>
    </div>)


}
export default Login;

