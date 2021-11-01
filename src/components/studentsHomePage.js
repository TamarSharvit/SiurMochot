import React ,{useEffect, useState}from 'react'
import '../css/studentPage.css';
import {DropDownCourse, DropDownUsers, DropDownStatus} from './dropDownBtn.js';
import {coursesFromServer} from'../api/coursesMongoose';
import {statusFromServer} from'../api/statusMongoose';
import jwt_decode from 'jwt-decode';
import Course from '../dataFromServer/coursesTable';
import { usersFromServer } from '../api/usersMongoose';
import { ArrowBackSharp } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {allStudentsFromServer} from '../api/personalInformation'
import {actions} from '../redux/actions/index'
const Students=()=>{
    // const studentsList=useSelector(state=> state.studentList.studentList );
    // const dispatch=useDispatch();
 const [arrC, setArrC]=useState([]);
 const [showC, setShowC]=useState(false);
 const [arrS, setArrS]=useState([]);
 const [showS, setShowS]=useState(false);
 const [arrStatus, setArrStatus]=useState([]);
 const [showStatus, setShowStatus]=useState(false);
//  useEffect(()=>{
//     if(studentsList!=[]){
//     allStudentsFromServer().then(res=> dispatch(actions.loadList(res)));
//     }
//  },[])
  useEffect(()=>{

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
        },[])


    
    return<div>
       
    
        <div className="upDiv" ><lable className="textUp">תלמידות</lable>
  
        </div><br></br>
        <div className="upDiv2">
          <div className="new">
              <div className="list"> {showC&&<DropDownCourse res={arrC} />}</div>
                                     {showS&&<DropDownUsers res={arrS}/>}
                                     {showStatus&&<DropDownStatus res={arrStatus} />} 
          </div>
           
            
        </div>
        <br></br><br></br>
        <div className="upDiv3">
            {/* <div className="title"></div> */}
        </div>
    </div>
}
export default Students;