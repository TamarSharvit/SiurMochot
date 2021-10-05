import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import '../css/studentPage.css';

export default function DataTable(props) {
const columns = [


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
    width: 110,
    editable: true,
  },
  {
    field: 'city',
    headerName: 'עיר',
    width: 110,
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
const showAaray=()=>{
    return props.res.map(u =>{ return  <div  className="title"> {u.email}  {u.firstName}{u.lastName}     {u.phone} {u.address}    {u.city}    {u.branch}    {u.yearOfLearning}    {u.note} </div>})}
const rows=props.res;
// const rows = [
//   { id: 1, lastName: props.res[0].lastName, firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];


  return (
    <div style={{ height: 400, width: '100%' }}>
        {/* {props.res[0].firstName}   {props.res[0].lastName} */}
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      /> */}
      {showAaray()}
    </div>
  );
}