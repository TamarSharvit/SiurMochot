import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { allStudentsFromServer } from '../api/personalInformation'
import { actions } from '../redux/actions/index'
import { connect } from 'react-redux';
const DataTable = (props) => {
  const studentsList = useSelector(state => state.studentList.studentList);
  const currentStudent = useSelector(state => state.selectedStudent);
  const dispatch = useDispatch();


  useEffect(() => {
    allStudentsFromServer().then((res) => {
      dispatch(actions.loadList(res));

    })
  }, [])




  const columns = [
    {
      field: 'note',
      headerName: 'הערה',
      width: 160,
      editable: true,
    },
    // {
    //   field: 'yearOfLearning',
    //   headerName: 'שנת לימוד',
    //   width: 110,
    //   editable: true,
    // },
    // {
    //   field: 'branch',
    //   headerName: 'סניף',
    //   width: 110,
    //   editable: true,
    // },
    {
      field: 'city',
      headerName: 'עיר',
      width: 110,
      editable: true,
    },
    {
      field: 'address',
      headerName: 'כתובת',
      width: 140,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'מייל',
      width: 140,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'טלפון',
      // type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: ' שם משפחה',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 140,
      // valueGetter: (params) =>
      //   `${params.getValue(params.id, 'firstName') || ''} ${
      //     params.getValue(params.id, 'lastName') || ''
      //   }`,
    },
    {
      field: 'firstName',
      headerName: 'שם פרטי',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 110,
      // valueGetter: (params) =>
      //   `${params.getValue(params.id, 'firstName') || ''} ${
      //     params.getValue(params.id, 'lastName') || ''
      //   }`,
    },
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
  ];


  return <div>

    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={studentsList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection onRowClick={(e) => { dispatch(actions.loadStudent(e.row)); console.log("the redux", currentStudent.selectedStudent.id); }}

      />
     
    </div>
  </div>

}
// export default connect(mapStateToProps)(DataTable);
export default DataTable;

// const mapStateToProps=(state)=>{
//   return {studentsList:state.studentList.studentList}
// }