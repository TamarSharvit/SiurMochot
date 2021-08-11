import React, { useState } from 'react';
import '../css/homePage.css';
import {useHistory } from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
function HomePage(){

    const history = useHistory();
    // const handleClick=()=>{
    //   history.push("/registerHomePage");
    // }
    return <div>
        <div className="divSide">
            <button className="btn2" onClick={()=>alert("dhsgjsh")}>דשבורד    <TrendingUpIcon/> </button>
            <br></br>
            <button className="btn2" onClick={()=>history.push('/registersHomePage')}>מתענינות   <GroupAddIcon/></button>
            <br></br>
            <button className="btn2" onClick={()=>history.push('./studentHomePage')}>תלמידות    <GroupIcon/></button>

        </div>
        {/* <div className="divMiddle"></div> */}
    </div>

}
export default HomePage;