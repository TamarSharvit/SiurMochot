import React ,{useState}from 'react'
import '../css/studentPage.css';

const Students=()=>{
    return<div>
        <div className="upDiv" ><lable className="textUp">תלמידות</lable></div><br></br>
        <div className="upDiv2">
           <button className="btn2">תאריך דווח</button>
            <button className="btn2">סטטוס דיווח</button>
            <button className="btn2">רשמת</button>
            <button className="btn2">קורס</button>

            <br></br>
            <button className="btn2">מקור ליד</button>
            <button className="btn2" >סטטוס טיפול </button>
            <button className="btn2">שנת לימוד</button>
            <button className="btn2">סניף</button>
            
        </div>
        <br></br><br></br>
        <div className="upDiv3"></div>
    </div>
}
export default Students;