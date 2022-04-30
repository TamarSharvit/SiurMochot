


export const addRegisterToData = (lastName, firstName, id, sex, hebrowDateOfBirth, foreignDateOfBirth, phone, anotherPhone, email, address, city, leadSource, note, dateOfEntry, secretary
) => {
    debugger;
    return fetch(`http://localhost:4000/newRegister/addRegisterToData`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            lastName, firstName, id, sex, hebrowDateOfBirth, foreignDateOfBirth, phone, anotherPhone, email, address, city, leadSource, note, dateOfEntry, secretary
        })
    })
        .then(() => { console.log("you add") })
        .catch((err) => {
            console.log(err);
        })
}

//id, fName, lName, email, phone, sex, leadSource, additionalPhone, foreignBirthDate , hebrowBirthDate, note