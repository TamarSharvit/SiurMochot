
import React from 'react';

export const addRegisterToData = ( id, fName, lName, email, phone, sex, leadSource, additionalPhone, foreignBirthDate , hebrowBirthDate, note) => {
    debugger;
    return fetch(`http://localhost:4000/addRegisterToData`, {
        method: 'POST', 
        body: {  id, fName, lName, email, phone, sex, leadSource, additionalPhone, foreignBirthDate , hebrowBirthDate, note }
    })
        .then(() => {console.log("you add") })
        .catch((err) => {
            console.log(err);
        })
}
