import React from "react";

export const loginToServer = (userName, password) => {
    return fetch(`http://localhost:4000/login/${userName}/${password}`)

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

export const signup = (id, fName, lName, email, password) => {
    debugger;
    return fetch(`http://localhost:4000/signup`, {
        method: 'POST', // or 'PUT'

        body: { id, fName, lName, email, password }
    })
        .then(() => { debugger; console.log("you singup") })
        .catch((err) => {
            debugger
            console.log(err);
        })
}
