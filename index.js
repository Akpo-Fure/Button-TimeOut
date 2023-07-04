let textArea = document.getElementById('counter'); // Get the text area
let countDown = document.getElementById('click'); // Get the countdown timer

let count = 0; // Set the initial count value
let timerId; // Set the initial timerId value
let remainingTime = 5; // Set the initial countdown time in seconds

const clicker = () => {
    count++; // Increment the count
    textArea.textContent += `Clicked ${count} times || `; // Update the text area
    clearTimeout(timerId); // Clear the timeout

    // Update the countdown timer
    let seconds = remainingTime; // Set the initial countdown time in seconds
    timerId = setInterval(() => { // Set the interval
        seconds--; // Decrement the seconds
        countDown.textContent = `Time remaining: ${seconds} seconds`; // Update the countdown timer

        if (seconds === 0) { // If the seconds are 0
            clearInterval(timerId); // Clear the interval
            count = 0; // Reset the count
            textArea.textContent = ''; // Reset the text area
            countDown.textContent = 'Click the button to increase the counter'; // Reset the countdown timer
        } 
    }, 1000); // Set the interval to 1 second
};

