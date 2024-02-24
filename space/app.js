// Gemini code to create array and values for it
let myVariable = 0; // Your variable that will change values
const maxValues = 20; // Number of values to track
const valuesArray = []; // Array to store the values


function updateValueAndArray() {
  // Update the variable with a new value (replace with your actual logic)
  myVariable = myVariable + 1; // Example: incrementing by 1

  // Add the new value to the array
  valuesArray.push(myVariable);

  // Keep the array length at maxValues
  if (valuesArray.length > maxValues) {
    valuesArray.shift(); // Remove the oldest value
  }
}


// Gemini code to track acceleration
// Function to update the content of the div based on the z-axis acceleration
function updateContent(acceleration) {
    var contentDiv = document.getElementById("content");
    
    // Threshold for z-axis acceleration
    var thresholdHigh = 1;
    var thresholdLow = -1;
    
    // Check if the acceleration along the z-axis is below the threshold
    if (acceleration < thresholdHigh) {
        contentDiv.textContent = "Below threshold content";
        contentDiv.style.backgroundColor = "red";
    } else {
        contentDiv.textContent = "Above threshold content";
        contentDiv.style.backgroundColor = "green";
    }
}

// Event listener for the devicemotion event
window.addEventListener('devicemotion', function(event) {
    // Get the z-axis acceleration
    var accelerationZ = event.acceleration.z;
    // var accelerationY = event.acceleration.y;
    // var accelerationX = event.acceleration.x;

    
    // Call the function to update the content of the div
    updateContent(accelerationZ);
});


// Example usage:
setInterval(updateValueAndArray, 1000); // Update every second (example)
