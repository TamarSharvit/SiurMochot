import React, { useState } from 'react';
import '../css/registersHomePage.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import ValidateTextField from '../common/validateTextFields';
import NewRegister from './newRegister.js';


import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
function RegistersHomePage() {


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

    


    return <div className="add">
            {/* <TextField id="standard-search" label="חיפוש תלמידה" type="search" /> */}
      
        
       <lable>פרטי תלמידה</lable>
        <Fab color="primary" aria-label="add">
        <AddIcon onClick={handleClick1}/>
      </Fab>
      
       <br></br><br></br>
     <lable>תחום התענינות</lable>
        <Fab color="primary" aria-label="add">
        <AddIcon onClick={handleClick2}/>
      </Fab>
 
        <br></br><br></br>
      <lable>דיווח</lable>
        <Fab color="primary" aria-label="add">
        <AddIcon onClick={handleClick3}/>
      </Fab>
      
        <br></br>
    </div>

}
export default RegistersHomePage;