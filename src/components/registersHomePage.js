import React, { useState } from 'react';
import '../css/registersHomePage.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import ValidateTextField from '../common/validateTextFields';
import NewRegister from './newRegister.js';
import AreaofInterest from './areaOfInterest.js';
import Reporting from './reporting.js';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function RegistersHomePage() {

    const[showNewUser, setShowNewUser]=useState(false);
    const[showInterest, setShowInterest]=useState(false);
    const[reporting, setreporting]=useState(false);
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        extendedIcon: {
          marginRight: theme.spacing(1),
        },
      }));

      const classes = useStyles();

 
    // const handleClick1 = () => {
    //     history.push("/newRegister");
    // }

    // const handleClick2 = () => {
    //     history.push("/areaOfInterest");
    // }

    // const handleClick3 = () => {
    //     history.push("/reporting");
    // }
    const history = useHistory();
  

            {/* <TextField id="standard-search" label="חיפוש תלמידה" type="search" /> */}

    return <div className="add">
  
       {/* <div className="b">
         <button className="buttonB"></button>
       </div> */}
       <div className="divUp">
       <button className="btnUp" >ציר הזמן</button>
         <button className="btnUp">פרטים ויצירת דיווח</button>
       </div>
      {/* <div className="divSide">
           
      <lable className="textSide">דשבורד</lable>
         <br></br>
         <lable className="textSide">מתענינות</lable>
         <br></br>
         <lable className="textSide">תלמידות</lable>
      </div> */}
      <br></br><br></br>
       <lable className="SubjectText">פרטים אישיים</lable>
        <Fab color="primary" aria-label="add">
        <AddIcon onClick={()=>{setShowNewUser(true)}}/>
      </Fab>
     {showNewUser&&<NewRegister setShowNewUser={setShowNewUser}/>} 
      
       <br></br><br></br>
     <lable className="SubjectText">מסלולי לימוד</lable>
        <Fab color="primary" aria-label="add">
        <AddIcon onClick={()=>{setShowInterest(true)}}/>
      </Fab>
      {showInterest&&<AreaofInterest setShowInterest={setShowInterest}/>} 

        <br></br><br></br>
      <lable className="SubjectText">דיווח</lable>
        <Fab color="primary" aria-label="add">
        <AddIcon onClick={()=>{setreporting(true)}}/>
      </Fab>
       {reporting&&<Reporting setreporting={setreporting}/>} 
        <br></br><br></br>
        
      
    </div>

}
export default RegistersHomePage;