import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ValidateTextField from '../common/validateTextFields';
import {loginToServer} from '../api/loginApi';
const Login = () => {
    const history = useHistory();
    const handleClick = () => {
        loginToServer();
     
        history.push("/registersHomePage");
    }
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (<div>
        <div>שם משתמש</div>
        <ValidateTextField value={userName}
            onChange={(value) => setUserName(value)}
            validate={() => { return userName === '' }}
            errorMessage={'שדה חובה'} />
        <br />

        <div>סיסמה</div>
        <ValidateTextField value={password}
            onChange={(value) => setPassword(value)}
            validate={() => { return password.length < 6 }}
            errorMessage={'חייב להכיל לפחות 6 תוים'} />
<br/>
        <Button variant="contained" color="primary" onClick={handleClick}>כניסה</Button>
    </div>)


}
export default Login;

