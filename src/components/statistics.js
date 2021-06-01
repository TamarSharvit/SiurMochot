import React from 'react';
import Button from '@material-ui/core/Button';
import '../css/statistics.css';
import {useHistory} from 'react-router-dom';

const Statistics=()=>{
    const history = useHistory();
    const handleClick = () => {
        history.push("/registersHomePage");
    }

    return <div className="body">
        <h1>statistics and graghs</h1>

        <Button variant="contained" color="default">מספר הבנות הרשומות בכל קורס</Button>
        <Button variant="contained" color="default">מספר הבנות המתעניינות לכל קורס</Button>   
        <Button variant="contained" color="default">מקורות מידע</Button>   
        <Button variant="contained" color="default">השגי רשמות-הרשאת מנהל</Button>   
        <br></br><br></br>
        <Button variant="contained" color="default" onClick={handleClick}> לדף הבית</Button>   

    </div>
}
export default Statistics;