import React, { useEffect, useState } from 'react'
import '../css/crm.css';
import { useDispatch, useSelector } from 'react-redux';
import { allStudentsFromServer } from '../api/personalInformation'
import { actions } from '../redux/actions/index'
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';

import DataTable from './tableCrm';


const Crm = () => {
    const history = useHistory();
    const handleCkick=()=>{
        history.push("/registersHomePage");
    }
    // useEffect(()=>{

    //     if(studentsList!=[]){
    //     allStudentsFromServer().then(res=> dispatch(actions.loadList(res)));
    //     }
    //  },[])

    // const studentsList = useSelector(state => state.studentList.studentList);
    // const dispatch = useDispatch();
    return <div>
   
        <div className="upDiv" ><lable className="textUp">CRM</lable>
       
        </div><br></br>
        <div className="upDiv2"></div>
        <br></br><br></br>
        <div className="upDiv3">

            {/* <DataTable /> */}
            <DataTable/>
            <Link
            component="button"
            variant="body2"
            onClick={handleCkick}
        > לעריכת התלמידה
          </Link>
        </div>

        


    </div>
}
export default Crm;