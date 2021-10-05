// import React from 'react';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import { makeStyles } from '@material-ui/core/styles';
// import '../css/list.css';

// const Mylist = () => {
//   const studets = ['a', 'b', 'c'];
//   return (studets.map((student => <List className="list">{student}</List>
//   )));
// }
// export default Mylist;
// const Mylist = () => {
//   const studets = ['a', 'b', 'c'];
//   return (studets.map((student => <List>{student}</List>
//   )));
// }
// export default Mylist;

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





import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

 const PinnedSubheaderList=()=> {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
      {[0, 1, 2,].map((sectionId) => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
            {/* <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader> */}
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
export default PinnedSubheaderList;