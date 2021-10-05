import React ,{useState}from 'react'
import '../css/studentPage.css';
import {DropDownCourse, DropDownUsers, DropDownStatus} from './dropDownBtn.js';
import {coursesFromServer} from'../api/coursesMongoose';
import {statusFromServer} from'../api/statusMongoose';
import jwt_decode from 'jwt-decode';
import Course from '../dataFromServer/coursesTable';
import { usersFromServer } from '../api/usersMongoose';
import { ArrowBackSharp } from '@material-ui/icons';
const Students=()=>{
 const [arrC, setArrC]=useState([]);
 const [showC, setShowC]=useState(false);
 const [arrS, setArrS]=useState([]);
 const [showS, setShowS]=useState(false);
 const [arrStatus, setArrStatus]=useState([]);
 const [showStatus, setShowStatus]=useState(false);
 const HandleClick=()=>{
        coursesFromServer().then((res) => {
            // console.log("res.status", res.status)
            // console.log("tokennn", res.token)
            //  const decoded = jwt_decode(res.token)
            //  localStorage.setItem("token",decoded);
             if (res.status === 200){
                 
               setArrC(res.coursess)
                setShowC(true);
                
             }
                 else{
                     alert("שם משתמש אינו קיים");
                 }
         }).catch(() => {
             // debugger
             //Handle error
         })
         usersFromServer().then((res)=>{
            if(res.status===200){
                setArrS(res.userss)
                setShowS(true)
            }
            else{
                alert("לא קיימים נתונים לערך זה")
            }
           }).catch(()=>{

           })


           statusFromServer().then((res)=>{
            if(res.status===200){
                setArrStatus(res.statuss)
                setShowStatus(true)
            }
            else{
                alert("לא קיימים נתונים לערך זה")
            }
           }).catch(()=>{

           })
        }
//   const func=()=>{
//          usersFromServer().then((res)=>{
//              if(res.status===200){
//                  setArrS(res.userss)
//                  setShowS(true)
//              }
//              else{
//                  alert("לא קיימים נתונים לערך זה")
//              }
//             }).catch(()=>{

//             })
//         }
        // const func2=()=>{
        //     statusFromServer().then((res)=>{
        //         if(res.status===200){
        //             setArrStatus(res.statuss)
        //             setShowStatus(true)
        //         }
        //         else{
        //             alert("לא קיימים נתונים לערך זה")
        //         }
        //        }).catch(()=>{
   
        //        })
        // }
    
    return<div>
        <div className="upDiv" ><lable className="textUp">תלמידות</lable>
        <button className="btn2" onClick={HandleClick}>חיפוש</button>
        </div><br></br>
        <div className="upDiv2">
          <div className="new">
              <div className="list"> {showC&&<DropDownCourse res={arrC} />}</div>
                                     {showS&&<DropDownUsers res={arrS}/>}
                                     {showStatus&&<DropDownStatus res={arrStatus} />} 
          </div>
         
            {/* <button className="btn2" >תאריך דווח</button>    
            <button className="btn2">סטטוס דיווח</button>
            <button className="btn2" onClick={func}>רשמת</button>
            <button className="btn2" onClick={HandleClick} >קורס</button>
            
            <br></br>
            <button className="btn2">מקור ליד</button>
            <button className="btn2" onClick={func2}>סטטוס טיפול </button>
            <button className="btn2">שנת לימוד</button>
            <button className="btn2">סניף</button> */}
           
            
        </div>
        <br></br><br></br>
        <div className="upDiv3">
            {/* <div className="title"></div> */}
        </div>
    </div>
}
export default Students;