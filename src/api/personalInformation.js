export const allStudentsFromServer = () => {
    return fetch(`http://localhost:4000/personalInformation/`)

        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        }
        )
        .catch((err) => {
            console.log("error", err);
        });

}

export const studentsFromServer = (secretary) => {
    return fetch(`http://localhost:4000/personalInformation/show/${secretary}`)

        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        }
        )
        .catch((err) => {
            console.log("error", err);
        });

}

export const addPersonalInformation = (lastName, firstName, id, sex, hebrowDateOfBirth, foreignDateOfBirth, phone, anotherPhone, email, address, city, leadSource, note, dateOfEntry, secretary
) => {
    debugger;
    return fetch(`http://localhost:4000/personalInformation/`, {
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