
export const addReportingToData = (type, comment) => {
    debugger;
    return fetch(`http://localhost:4000/reporting/addReporting`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ type, comment})
    })
        .then(() => {console.log("you add") })
        .catch((err) => {
            console.log(err);
        })
}

