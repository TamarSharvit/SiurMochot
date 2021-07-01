export const courseDetails = (name, price) => {
    debugger;
    return fetch(`http://localhost:4000/courseDetails/addCourseDetails`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ name, price })
    })
        .then(() => {console.log("you add") })
        .catch((err) => {
            console.log(err);
        })
}