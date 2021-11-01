import React ,{useEffect, useState}from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {allStudentsFromServer} from '../api/personalInformation'
import {actions} from '../redux/actions/index'
const DataTable=()=>{

const studentsList=useSelector(state=> state.studentList.studentsList );
const dispatch=useDispatch();
const [rows, setRows]=useState([]);
useEffect(()=>{
 
    allStudentsFromServer().then(res=>dispatch(actions.loadList(res)));
    console.log(studentsList[0].firrstName);
    
 },[])




const columns = [
    {
        field: 'id',
        headerName: 'id',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        // valueGetter: (params) =>
        //   `${params.getValue(params.id, 'firstName') || ''} ${
        //     params.getValue(params.id, 'lastName') || ''
        //   }`,
      },

    {
      field: 'fullName',
      headerName: 'שם',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      // valueGetter: (params) =>
      //   `${params.getValue(params.id, 'firstName') || ''} ${
      //     params.getValue(params.id, 'lastName') || ''
      //   }`,
    },
      {
      field: 'phone',
      headerName: 'טלפון',
      // type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'מייל',
      width: 110,
      editable: true,
    },
    {
      field: 'address',
      headerName: 'כתובת',
      width: 200,
      editable: true,
    },
    {
      field: 'city',
      headerName: 'עיר',
      width: 200,
      editable: true,
    },
    {
      field: 'branch',
      headerName: 'סניף',
      width: 110,
      editable: true,
    },
    {
      field: 'yearOfLearning',
      headerName: 'שנת לימוד',
      width: 110,
      editable: true,
    },
    {
      field: 'note',
      headerName: 'הערה',
      width: 110,
      editable: true,
    },
  ];
 

    
  
 
// const rows=[  {id:1, fullName: 'hhh', phone:'0000', email: 'Jon', address:'sss', city:'hhh', branch:'hhh' , yearOfLearning:'dd',note:'yy'}
// ]

  
useEffect(()=>{
  showList();
},studentsList);

const showList=()=>{ 
  console.log('ddd');
  console.log(studentsList[0].address);
   studentsList.map(i=>{
      
   setRows([...rows,{id:i, fullName: 'hhh', phone:'0000', email: 'Jon', address:'sss', city:'hhh', branch:'hhh' , yearOfLearning:'dd',note:'yy'}]);
})
}
  return <div>

    {/* {showList()}; */}
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
   </div>

}
export default DataTable;