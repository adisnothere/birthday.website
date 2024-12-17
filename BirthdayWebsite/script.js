// Get the button and greeting card elements
const button = document.getElementById('openButton');
const greetingCard = document.getElementById('greetingCard');

// Function to check if the current time is 12 AM (midnight)
function isMidnight() {
    const now = new Date();
    return now.getHours() === 0 && now.getMinutes() === 0;
}

// Event listener for the button click
button.addEventListener('click', () => {
    if (isMidnight()) {
        // Show the greeting card if it is midnight
        greetingCard.style.display = 'block';
        button.style.display = 'none'; // Hide the button after click
    } else {
        alert('Please open this at 12 AM!');
    }
});
