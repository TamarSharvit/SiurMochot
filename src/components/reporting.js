import React, { useState } from 'react';
import '../css/registersHomePage.css';
import Button from '@material-ui/core/Button';

const AreaOfInterest=(props)=>{
  const handleClick=()=>{
  
    
  }
  const handleClick2=()=>{
    props.setreporting(false)
    
  }

      return <div className="div2">
         <Button className="button" variant="contained" color="default" onClick={handleClick}>ממתינה למילגה</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>נקבעה פגישה</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>נשלחו חומרים</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>קבלה מידע</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>הוספת תלמידה</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>שיחת התענינות</Button>
         <br></br>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>סגירה ותשלום</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>לא רלונטי</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>אין מענה</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>לקראת סגירה</Button>
         <Button className="button" variant="contained" color="default" onClick={handleClick}>בטיפול</Button>
         <br></br>
         <Button variant="contained" color="primary" onClick={handleClick2}>הוספה למערכת</Button>
  </div>
  
  
}

export default AreaOfInterest;