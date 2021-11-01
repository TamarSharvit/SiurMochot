import React, { useState, useEffect } from 'react';
import '../css/homePage.css';
import {useHistory } from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import {allEducationProgram}from '../api/educationPrograming'
import {actions} from '../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';

const HomePage=()=>{
    const educationProgramSave=useSelector(state=> state.educationProgramList.educationProgramList );
    const dispatch=useDispatch();
    useEffect(()=>{
     
        allEducationProgram().then(res=>dispatch(actions.loadList2(res)));
        console.log(educationProgramSave[0])
        
     },[])

    const history = useHistory();
    // const handleClick=()=>{
    //   history.push("/registerHomePage");
    // }
    return <div>
        <div className="divSide">
            <button className="btn2">דשבורד    <TrendingUpIcon/> </button>
            <br></br>
            <button className="btn2" onClick={()=>history.push('/registersHomePage')}>מתענינות   <GroupAddIcon/></button>
            <br></br>
            <button className="btn2" onClick={()=>history.push('./studentHomePage')}>תלמידות    <GroupIcon/></button>
            <br></br>
            <button className="btn2" onClick={()=>history.push('./crm')}>CRM        <SupervisedUserCircleIcon/>     </button>
            <br></br>
            <button className="btn2" onClick={()=>history.push('./maneger')}>ניהול        <ManageAccountsIcon/>     </button>



        </div>
        {/* <div className="divMiddle"></div> */}
    </div>

}
export default HomePage;