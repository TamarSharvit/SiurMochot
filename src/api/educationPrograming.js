
export const allEducationProgram = () => {
    return fetch(`http://localhost:4000/educationPrograming/`)

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