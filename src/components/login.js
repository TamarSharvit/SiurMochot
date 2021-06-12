
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ValidateTextField from '../common/validateTextFields';
import { loginToServer, signup } from '../api/loginApi';
import Link from '@material-ui/core/Link';
import NewUser from './newUser.js';
import login from '../css/login.css';
const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const cheackValidName = () => {
        return userName === '';
    }

    const cheackValidPass = () => {
        return password.length < 6;
    }

    const handleClick = () => {
        if (!(cheackValidName() && cheackValidPass())) {
            loginToServer(userName, password)/*send params*/.then((res) => {
                //save token
                history.push("/registersHomePage");
            }).catch(() => {
                //Handle error
            })
        }
    }

    const handleClickSignup = () => {
        history.push("/NewUser");
    }


    return (<div className="body">
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
        <br />
        {/* <Button variant="contained" color="default" onClick={handleClick}>משתמש חדש</Button> */}
        <Link
            component="button"
            variant="body2"
            onClick={handleClickSignup}
        > משתמש חדש
          </Link>

    </div>)
}

export default Login;
