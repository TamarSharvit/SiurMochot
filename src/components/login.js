import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ValidateTextField from '../common/validateTextFields';
import { loginToServer, signup } from '../api/loginApi';

const Login = () => {
<<<<<<< HEAD

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();
    const handleClick = () => {
        //Validation - if email and pwd are VALID 
        signup(userName, password).then((res) => {
            debugger
=======
    const cheackValidName=()=>{
        return userName === ''; 
    }
    const cheackValidPass=()=>{
        return password.length < 6 ;
    }
    const history = useHistory();
    const handleClick = () => {
        if(!(cheackValidName()&&cheackValidPass())){
        loginToServer(userName, password)/*send params*/.then((res) => {
            //save token
>>>>>>> 29a46d235a416515bf0d36748734d9e9f60e5320
            history.push("/registersHomePage");
        }).catch(() => {
            //Handle error
        })
    }
<<<<<<< HEAD

=======
}

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
>>>>>>> 29a46d235a416515bf0d36748734d9e9f60e5320

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

