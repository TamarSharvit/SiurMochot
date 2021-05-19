import React from 'react';
import '../css/courses.css';
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Courses(){
    return<div className="button">
        
        <h2 className="title">רשימת קורסים</h2>
        {/* <Button  variant="contained" color="default">לפרטי הקורס</Button>    */}
        <Popup trigger={<button>בניית אתרים</button>} position="right center">
    <div>פעמיים בשבוע בירושלים <button> תלמידות הקורס</button> <button> מתענינות הקורס</button></div>
  </Popup><br></br>
  <Popup trigger={<button>  עיצוב אתרים</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup><br></br>
  <Popup trigger={<button> אדריכלות  </button>} position="right center">
    <div>Popup content here !!</div>
  </Popup><br></br>
  <Popup trigger={<button>עיצוב</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup><br></br>
  <Popup trigger={<button>מולטימדיה</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup><br></br>
  <Popup trigger={<button> פרסום</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup><br></br>
  <Popup trigger={<button> תוכנות </button>} position="right center">
    <div>Popup content here !!</div>
  </Popup><br></br>
  <Popup trigger={<button> אקסטרה </button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
    </div> 
};
export default Courses;





