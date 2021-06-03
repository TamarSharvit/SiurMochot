import React from "react";

export const loginToServer = () => {
    return fetch(`http://localhost:3000/login?user=user1`, { body: { user: 111 } })
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
