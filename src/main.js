console.log("this is working you are going to be GREAT! even though you do not think so");

// Declaring variables for parkName and parkState




// Attempting to Make a for Loop that iterates through my objects and displays them on the Dom This IS NOT WORKING but I feel I am CLOSE!!!!

const loopGaru= () => {
   for (i = 0; i < response.length; i++) {
       text += array[i] + "<br>";
   } 

}

// THis is my DOM injector for Dynamic Content. I have also included some interpolated variables for easy access to display.

const domInputContainer = (parkName, parkState) => {
    return `
    <fieldset>
    <article>
        <h3>${parkName}</h3>
        <p>${parkState}</p>
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
            
        });
        
    };
    document.getElementById("parkDisplay").addEventListener("click", buttonFunction);
    