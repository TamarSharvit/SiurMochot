export const editStatus = (name, code) => {
    debugger;
    return fetch(`http://localhost:4000/editStatus/addEditStatus`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({name, code})
    })
        .then(() => {console.log("you add") })
        .catch((err) => {
            console.log(err);
        })
}