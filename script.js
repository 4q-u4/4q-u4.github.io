

const specializationText = 'Cybersec specialist'; // Remove the leading space and double quotes
const specializationElement = document.getElementById("specialization");
let currentIndex = 0;
let isDeleting = false;
let typingSpeed = 200; // Adjust typing speed (milliseconds)

function typeSpecialization() {
    const currentText = specializationElement.textContent;
    if (!isDeleting) {
        specializationElement.innerHTML = '{"' + specializationText.substring(0, currentIndex + 1) + '"<span class="cursor"></span>}';
        currentIndex++;
        if (currentIndex === specializationText.length + 2) {
            isDeleting = true;
            typingSpeed = 250; // Faster deletion speed (adjust as needed)
        }
    } else {
        specializationElement.innerHTML = '{"' + specializationText.substring(0, currentIndex - 1) + '"<span class="cursor"></span>}';
        currentIndex--;
        if (currentIndex === 0) {
            isDeleting = false;
            typingSpeed = 200; // Typing speed after deletion
        }
    }

    setTimeout(typeSpecialization, typingSpeed);
}

// Start typing animation
setTimeout(typeSpecialization, typingSpeed);