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

export const signup = (userName, password) => {
    debugger;
    return fetch(`http://localhost:4000/signup`, {
        method: 'POST', // or 'PUT'

        body: { userName: userName, password: password }
    })
        .then(() => { debugger; console.log("you singup") })
        .catch((err) => {
            debugger
            console.log(err);
        })
}
