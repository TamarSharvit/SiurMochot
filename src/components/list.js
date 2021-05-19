import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const Mylist = () => {
  const studets = ['a', 'b', 'c', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (studets.map((student => <List>{student}</List>
  )));
}
export default Mylist;

// const VirtualizedList = () => {

//   const studets = ['a', 'b', 'c'];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     height: 400,
//     maxWidth: 300,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

//  function renderRow() {

//     return (
//         studets.map((student => <ListItem button key={student}>
//         <ListItemText primary={student} />
//       </ListItem>
//     )));
//   }
//  const classes = useStyles();

//     return (
//       <div className={classes.root}>
//          <List className={classes.root} >
//          {renderRow()}
//        </List>
//       </div>
//     );
//   }

// export default VirtualizedList;
