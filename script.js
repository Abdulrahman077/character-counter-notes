// Get the HTML elements
let message = document.getElementById("message");
let counter = document.getElementById("counter");
let remaining = document.getElementById("remaining");
let progressBar = document.getElementById("progressBar");
let progressTrack = document.getElementById("progressTrack");
let warning = document.getElementById("warning");

// Get the character limit from the textarea
let maxCharacters = message.maxLength;


// Update the character counter
function updateCounter() {

    // Count the characters typed by the user
    let typedCharacters = message.value.length;

    // Calculate the remaining characters
    let remainingCharacters = maxCharacters - typedCharacters;

    // Calculate the percentage of the limit used
    let percentage = (typedCharacters / maxCharacters) * 100;


    // Display the current character count
    counter.innerText =
        typedCharacters + " / " + maxCharacters + " characters";

    // Display the remaining character count
    remaining.innerText =
        remainingCharacters + " characters left";


    // Update the progress bar width
    progressBar.style.width = percentage + "%";

    // Update the progress bar accessibility value
    progressTrack.setAttribute("aria-valuenow", typedCharacters);


    // Change to red when 20 characters or fewer remain
    if (remainingCharacters <= 20) {

        remaining.style.color = "#c15d68";
        progressBar.style.background = "#d96b76";

    } else {

        // Keep the normal blue theme
        remaining.style.color = "#527fa9";

        progressBar.style.background =
            "linear-gradient(90deg, #a9d1f1, #5d95c7)";
    }


    // Display a warning when the limit is nearly reached
    if (remainingCharacters === 0) {

        warning.innerText = "Your page is full! ✦";

    } else if (remainingCharacters <= 20 && typedCharacters > 0) {

        warning.innerText =
            "Almost there! Only " + remainingCharacters + " left.";

    } else {

        // Clear the warning when enough characters remain
        warning.innerText = "";
    }
}


// Update the counter whenever the user types
message.addEventListener("input", updateCounter);


// Set the initial count when the page opens
updateCounter();