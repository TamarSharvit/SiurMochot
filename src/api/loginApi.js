import React from "react";

export const loginToServer = (email, password) => {
    return fetch(`http://localhost:4000/users/login/${email}/${password}`)

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
    console.log(id, fName, lName, email, password)
    debugger;
    return fetch(`http://localhost:4000/users/signup`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ id, fName, lName, email, password })
    })
        .then(() => { debugger; console.log("you singup") })
        .catch((err) => {
            debugger
            console.log(err);
        })
}
