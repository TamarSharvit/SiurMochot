import React from 'react';
import '../css/registersHomePage.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function RegistersHomePage() {

    const history = useHistory();
    const handleClick = () => {
        history.push("/courses");
    }
    return <div className="div1">
        <div className="div2">
            <h2>פניה חדשה</h2>
            <br></br>

            <TextField id="outlined-basic" label="מספר זהות" variant="outlined" />
            <br></br>
            <TextField id="outlined-basic" label="שם פרטי" variant="outlined" />
            <br></br>
            <TextField id="outlined-basic" label="שם משפחה" variant="outlined" />
            <br></br>
            <TextField id="outlined-basic" label="מייל" variant="outlined" />
            <br></br>
            <TextField id="outlined-basic" label="שם הקורס" variant="outlined" />
            <br></br>
            <TextField id="outlined-basic" label="מקור פרסום" variant="outlined" />
            <br></br>

            <br></br>
        </div>

        <div className="div3">
            <h2>טיפול בפניה קיימת</h2>
            <br></br>

            <TextField id="standard-search" label="חיפוש תלמידה" type="search" />
            <br></br>
        </div>

        <Button variant="contained" color="default" onClick={handleClick}>לדף הקורסים</Button>
        <Button variant="contained" color="default" onClick={handleClick}>לסטטיסטיקות וגרפים</Button>
    </div>

}
export default RegistersHomePage;