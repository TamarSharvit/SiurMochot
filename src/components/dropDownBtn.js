import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { studentsFromServer } from '../api/personalInformation';
import DataTable from './table';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const DropDownCourse = (props) => {

  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const showAaray = () => {
    return props.res.map(u => { return <MenuItem value={u._id}>{u.name}</MenuItem> })
  }

  const handleChange = (event) => {
    setAge(event.target.value)


  };

  return (
    <div>

      <FormControl className={classes.formControl} >
        <InputLabel id="demo-simple-select-label">קורס</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >

          {/* <MenuItem value={10}>{props.res[props.res.length-1].name}</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
          {showAaray()}
        </Select>
      </FormControl>

    </div>
  );
}
export const DropDownUsers = (props) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState([]);
  const [age, setAge] = React.useState('');
  const showAaray = () => {
    return props.res.map(u => { return <MenuItem value={u._id}>{u.fName}  {u.lName}</MenuItem> })
  }

  const handleChange = (event) => {
    setAge(event.target.value)
    studentsFromServer(event.target.value).then((res) => {
      if (res.status === 200) {
        setArr(res.personalInformation)
        setShow(true);
      }
      else {
        alert("לא קיימים נתונים לערך זה")
      }
    }).catch(() => {

    })
  };


  return (
    <div>

      <FormControl className={classes.formControl} >
        <InputLabel id="demo-simple-select-label">רשמת</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          {showAaray()}

        </Select>
      </FormControl>
      {show && <DataTable res={arr} />}
    </div>
  );
}

export const DropDownStatus = (props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const showAaray = () => {
    return props.res.map(u => { return <MenuItem value={u._id}>{u.name}</MenuItem> })
  }

  const handleChange = (event) => {
    setAge(event.target.value)
  };

  return (
    <div>

      <FormControl className={classes.formControl} >
        <InputLabel id="demo-simple-select-label">סטטוס טיפול</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          {showAaray()}
        </Select>
      </FormControl>

    </div>
  );
}

export const DropDownBranch = (props) => {

  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const showAaray = () => {
    return props.res.map(u => { return <MenuItem value={u._id}>{u.name}</MenuItem> })
  }

  const handleChange = (event) => {
    setAge(event.target.value)


  };

  return (
    <div>

      <FormControl className={classes.formControl} >
        <InputLabel id="demo-simple-select-label">סניף</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >

          {/* <MenuItem value={10}>{props.res[props.res.length-1].name}</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
          {showAaray()}
        </Select>
      </FormControl>

    </div>
  );
}



