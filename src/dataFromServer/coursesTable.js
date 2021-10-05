import React from 'react';

const Course = (props) => {

    const getResults = () => {
       
      return props.res.map(u =>{ return <div>
          <label>{u.name}</label>
      </div>});
      
    }

    return <div>{getResults()}</div>
}

export default Course;