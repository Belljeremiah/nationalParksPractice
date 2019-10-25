console.log("this is working you are going to be GREAT! even though you do not think so");

// Declaring variables for parkName and parkState

// let parkName = "A Park";
// let parkState = "A state";


// THis is my DOM injector for Dynamic Content. I have also included some interpolated variables for easy access to display.

const domInputContainer = () => {
    return `
    <fieldset>
    <article>
        <h3></h3>
        <p></p>
        <button id="parkDisplay" type="button">Display Parks!</button>
    </article>   
    </fieldset> 
    `;
};

// This declares my constants and sets the variables that I wish to use for my dom injector

const inputContainer = document.querySelector('#domInjectorId');

// This calls my function and allows it to begin working and display some items.

inputContainer.innerHTML = domInputContainer();

// attempting to log the api data on the DOM
const apiOutputEl = document.getElementById("parkDisplay");

    const buttonFunction = () => {
        parksApiFunction()
        .then(response => {
        console.log(response)
    });
    
    };
document.getElementById("parkDisplay").addEventListener("click", buttonFunction);