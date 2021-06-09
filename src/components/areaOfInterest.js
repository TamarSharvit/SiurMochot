import React, { useState } from 'react';
import '../css/registersHomePage.css';
import '../css/newRegister.css'
import ValidateTextField from '../common/validateTextFields';
import Button from '@material-ui/core/Button';
import { addToData } from '../api/newRegisterApi';
const AreaOfInterest=(props)=>{
      //תחום התענינות
      const [priceDiscount, setPriceDiscount] = useState('');
      const [discount, setDiscount] = useState('');
      const [price, setPrice] = useState('');
      const [modol, setModol] = useState('');
      const [course, setCourse] = useState('');
      const [status, setStatus] = useState('');

      const handleClick = () => {
              addToData()
              props.setShowInterest(false);
       
}

      return <div className="div2">
      <h2>תחום התענינות</h2>
      <ValidateTextField value={priceDiscount}
          onChange={(value) => setPriceDiscount(value)}
          validate={() => { return priceDiscount === '' }}
          errorMessage={'שדה חובה'} 
          lable={"מחיר לאחר הנחה"}/>
  
  <ValidateTextField value={discount}
          onChange={(value) => setDiscount(value)}
          validate={() => { return discount === '' }}
          errorMessage={'שדה חובה'} 
          lable={"הנחה"}/>
  
  <ValidateTextField value={price}
          onChange={(value) => setPrice(value)}
          validate={() => { return price === '' }}
          errorMessage={'שדה חובה'} 
          lable={"מחיר"}/>
  
  <ValidateTextField value={modol}
          onChange={(value) => setModol(value)}
          validate={() => { return modol === '' }}
          errorMessage={'שדה חובה'} 
          lable={"מודול"}/>
  
  <ValidateTextField value={course}
          onChange={(value) => setCourse(value)}
          validate={() => { return course === '' }}
          errorMessage={'שדה חובה'} 
          lable={"שם הקורס"}/>
  
  
  <ValidateTextField value={status}
          onChange={(value) => setStatus(value)}
          validate={() => { return status === '' }}
          errorMessage={'שדה חובה'} 
          lable={"סטטוס"}/>
  <Button variant="contained" color="primary" onClick={handleClick}>הוספה למערכת</Button>
  </div>
  
  
}

export default AreaOfInterest;