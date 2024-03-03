// Gemini code to create array and values for it
// let myVariable = 0; // Your variable that will change values
// const maxValues = 20; // Number of values to track
// const valuesArray = []; // Array to store the values


// function updateValueAndArray() {
//   // Update the variable with a new value (replace with your actual logic)
//   myVariable = myVariable + 1; // Example: incrementing by 1

//   // Add the new value to the array
//   valuesArray.push(myVariable);

//   // Keep the array length at maxValues
//   if (valuesArray.length > maxValues) {
//     valuesArray.shift(); // Remove the oldest value
//   }
// }
const maxValues = 50; // Number of values to track
let accelerationZArray = []; // array of z acceleration data
let average;
let sum;

// sleep function from https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
// also i'm not getting it to work properly

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// Gemini code to track acceleration
// Function to update the content of the div based on the z-axis acceleration
async function updateContent(acceleration) {
    var contentDiv = document.getElementById("planet");
    var bodyDiv = document.getElementsByTagName("BODY")[0];;

    // Threshold for z-axis acceleration
    var thresholdHigh = 1.8;
    var thresholdLow = -1.8;

    // Check if the acceleration along the z-axis is below the threshold
    if (acceleration < thresholdHigh && acceleration > thresholdLow) {
        contentDiv.textContent = "Planet Earth";
        bodyDiv.style.backgroundColor = "black";
    } else {
        contentDiv.textContent = "???????????";
        bodyDiv.style.backgroundColor = "red";
        // 
        // await sleep(1000);
    }
}

// Event listener for the devicemotion event
window.addEventListener('devicemotion', function (event) {
    // Get the z-axis acceleration
    var accelerationZ = event.acceleration.z;
    accelerationZArray.push(accelerationZ);
    console.log(accelerationZ);
    if (accelerationZArray.length > maxValues) {
        accelerationZArray.shift(); // Remove the oldest value
        let sum = accelerationZArray.reduce((acc, value) => acc + value, 0);
        average = sum / accelerationZArray.length;
    }

    // Call the function to update the content of the div
    updateContent(average);
});

console.log(average);
// averageing value Example usage:
// setInterval(updateValueAndArray, 1000); // Update every second (example)
