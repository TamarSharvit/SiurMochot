export const modelDetails = (year, branch, morningEvening) => {
    debugger;
    return fetch(`http://localhost:4000/modelDetails/addModelDetails`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ year, branch, morningEvening})
    })
        .then(() => {console.log("you add") })
        .catch((err) => {
            console.log(err);
        })
}