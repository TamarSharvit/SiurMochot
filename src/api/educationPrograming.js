
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

export const addEducationProgram = (status, course,branch, yearOfLearning,price,discount,priceDiscount,paidInSystem, contract,dateOfEnter, secretary, student) => {
    debugger;
    return fetch(`http://localhost:4000/educationPrograming/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status, course,branch, yearOfLearning,price,discount,priceDiscount,paidInSystem, contract, dateOfEnter, secretary, student })
    })
        .then(() => { console.log("you add") })
        .catch((err) => {
            console.log(err);
        })
}