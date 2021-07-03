import React, { useState} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Courses from './courses.js';
import Models from './models.js';
function Editmaneger(){

    const [showCourses, setShowCourses] = useState(false);
    const [showModel, setShowModel] = useState(false);
    

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
   return <div className="add">
      
        
    <lable>עריכת טבלת קורסים</lable>
     <Fab color="primary" aria-label="add">
     <AddIcon onClick={()=>{setShowCourses(true)}}/>
   </Fab>
  {showCourses&&<Courses setShowCourses={setShowCourses}/>} 
   
    <br></br><br></br>
  <lable>עריכת טבלת מודל הקורסים</lable>
     <Fab color="primary" aria-label="add">
     <AddIcon onClick={()=>{setShowModel(true)}}/>
   </Fab>
   {showModel&&<Models setShowModel={setShowModel}/>} 


   
 </div>
    
}
export default Editmaneger;
 
