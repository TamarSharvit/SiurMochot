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




