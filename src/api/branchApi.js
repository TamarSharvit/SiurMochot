export const branchFromServer = () => {
    return fetch(`http://localhost:4000/branch/`)

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