import React from 'react';
import '../css/courses.css';
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Modala from "./modal.js";
function Courses() {
    const courses = [
        {
            name: "אדריכלות",
            details: "פעמיים בשבוע בירושלים",
            studets: [],
            interested: [],
        },
        {
            name: "עיצוב אתרים",
            studets: [],
            interested: [],
        }
    ]
    return <div className="button">

        <h2 className="title">רשימת קורסים</h2>
        {courses.map(course =><Modala course={course} key={course}></Modala>)}
    </div>
};
export default Courses;





