

export const areaOfInterest = (priceDiscount, discount, price, modol, course, status) => {
    debugger;
    return fetch(`http://localhost:4000/areaOfInterest/addAreaOfInterest`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ priceDiscount, discount, price, modol, course, status })
    })
        .then(() => {console.log("you add") })
        .catch((err) => {
            console.log(err);
        })
}