const textToType = "Cybersecurity Specialist";
const typedTextElement = document.querySelector(".typed-text");

function typeText() {
    let index = 0;
    function type() {
        if (index < textToType.length) {
            typedTextElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
        }
    }
    type();
}

window.addEventListener("DOMContentLoaded", () => {
    typeText();
});



// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the cloud element
    const cloud = document.querySelector(".cloud");

    // Add animation class to the cloud
    cloud.classList.add("cloud-animation");

    // Show the cloud
    cloud.style.display = "block";

    // After a delay, hide the cloud
    setTimeout(() => {
        cloud.style.display = "none";
    }, 3000); // Adjust the delay as needed
});


// JavaScript to trigger the continuous animation
const heading = document.getElementById('portfolio-heading');

textToType = 'Portfoli I';
let isTyping = false;

function toggleAnimation() {
    if (isTyping) {
        heading.classList.remove('typing');
        setTimeout(() => {
            heading.textContent = '';
            heading.style.width = '0';
            isTyping = false;
        }, 500);
    } else {
        heading.textContent = textToType;
        heading.style.width = 'auto';
        heading.classList.add('typing');
        isTyping = true;
    }
}

// Start the continuous animation
setInterval(toggleAnimation, 3000); // Change text every 3 seconds
toggleAnimation(); // Start the animation immediately
