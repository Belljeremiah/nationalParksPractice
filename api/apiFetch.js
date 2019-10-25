
// THis is declaring my api and doing my fetch call.

const apiTestURL = "http://localhost:8088/parks"

const parksApiFunction = () => {
return fetch(`${apiTestURL}`)
    .then(r => r.json())

};

// console.log("this is linked super cool!");
