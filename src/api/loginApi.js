import React from "react";

export const loginToServer = (userName, password) => {
    return fetch(`http://localhost:3000/login`, { body: { userName: userName , password: password} })
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
