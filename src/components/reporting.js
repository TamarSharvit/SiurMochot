import React, { useState } from 'react';
import '../css/registersHomePage.css';
import '../css/newRegister.css'
import Button from '@material-ui/core/Button';
import TextArea from './textArea.js'; 
import SwitchButton from './switchButton';
import {addReportingToData} from '../api/newReporting'
import EventNoteIcon from '@material-ui/icons/EventNote';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import MaterialUIPickers from './MaterialUIPickers.js';
import TextField from '@material-ui/core/TextField';
const Reporting=(props)=>{
  const [clicked, setClick] = useState(false);
  const [kindOfReport, setKindOfReport]=useState("");
  const [common, setCommon]=useState("");
  // this.handleClick = this.handleClick.bind(this);
  const handleClick=(e)=>{
    setKindOfReport(e.target.innerText)
    console.log("jjjj", e.target.innerText);
    
  }
  const handleClick2=()=>{
     addReportingToData(kindOfReport,common)
    props.setreporting(false)
    
  }

      return <div className="div1">
        <div className="div2"> 
         <h5>סטטוס דיווח</h5>
     
        
        <button className="btn12"  onClick={handleClick}>עבודה משרדית</button>
        <button className="btn11"  onClick={handleClick}>לא רלונטי</button>
        <button className="btn10"  onClick={handleClick}>חתמה על חוזה</button>
        <button className="btn9"  onClick={handleClick}>אין מענה</button>
        <button className="btn8"  onClick={handleClick}>לקראת סגירה</button>
        <button className="btn7"  onClick={handleClick}>בטיפול</button>
         <br></br>
        <button className="btn6"  onClick={handleClick}>גבית תשלום</button>
        <button className="btn5"  onClick={handleClick}>ממתינה למילגה</button>
        <button className="btn4"  onClick={handleClick}>נקבעה פגישה</button>
        <button className="btn20"  onClick={handleClick}>נשלחו חומרים</button>
        <button className="btn3"  onClick={handleClick}>שיחת התענינות</button>
        <button className="bton1"  onClick={handleClick}>קבלה מידע</button>
         {/* <Button className="button" variant="contained" color="default" onClick={handleClick}>ממתינה למילגה</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>נקבעה פגישה</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>נשלחו חומרים</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>קבלה מידע</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>הוספת תלמידה</Button> */}
         
         {/* <br></br>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>סגירה ותשלום</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>לא רלונטי</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>אין מענה</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>לקראת סגירה</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>בטיפול</Button>
         <br></br> */}
          
         {/* <TextArea text="פירוט דיווח"/> */}
         <h5>פירוט דיווח</h5>
         <input className="report" type="text" onChange={(e)=>{setCommon(e.target.value)}}/> 
         <LockOpenIcon className="date" fontSize="large"/> 
         <LockIcon className="date" fontSize="large"/> 
         <br></br>
         
         <EventNoteIcon className="date" fontSize="large" onClick={()=>{setClick(true)}}/>
         {clicked&&<MaterialUIPickers/>}
         <Button variant="contained" color="primary" onClick={handleClick2} className="addSystem">הוספה למערכת</Button>
  </div>
  </div>
  
}

export default Reporting;

 {/* <lable>חוזה</lable>
         <SwitchButton/> */}


