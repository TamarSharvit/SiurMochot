import React, { useState } from 'react';
import '../css/registersHomePage.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import ValidateTextField from '../common/validateTextFields';
import NewRegister from './newRegister.js';
function RegistersHomePage() {

    const history = useHistory();
    const handleClick1 = () => {
        history.push("/newRegister");
    }

    const handleClick2 = () => {
        history.push("/areaOfInterest");
    }

    const handleClick3 = () => {
        history.push("/reporting");
    }

    


    return <div className="div1">
       

        {/* <div className="div3">
            <h2>טיפול בפניה קיימת</h2>
            <br></br>

            <TextField id="standard-search" label="חיפוש תלמידה" type="search" />
            <br></br>
        </div> */}

        <Button className="button" variant="contained" color="default" onClick={<NewRegister/>}>פרטי תלמידה</Button>
        <Button className="button" variant="contained" color="default" onClick={handleClick2}>תחום התענינות</Button>
        <Button className="button" variant="contained" color="default" onClick={handleClick3}>דיווח</Button>
    </div>

}
export default RegistersHomePage;