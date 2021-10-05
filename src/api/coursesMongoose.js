export const coursesFromServer = () => {
    return fetch(`http://localhost:4000/courses/`)

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