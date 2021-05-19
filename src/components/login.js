import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
function Login(){

    const history = useHistory();
          const handleClick = () => {
        history.push("/registersHomePage");
    }

    return( <div>
        <lable>
        <input type="text"></input>שם
        </lable>
        <br></br>
        <lable>
        <input type="text"></input>סיסמה
        </lable>
        <br></br> 
        {/* <button  type='button'>  </button> */}
        <Button variant="contained" color="primary" onClick={handleClick}>כניסה</Button>
        </div> )
 
  
}
export default Login;

