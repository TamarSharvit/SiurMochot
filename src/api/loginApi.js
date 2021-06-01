import React from "react";

export const loginToServer = () => {
    fetch(`http://localhost:3000/login?user=user1`)
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
