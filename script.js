const h1Element = document.querySelector('.jap');
const text = h1Element.textContent;

// Split the text into individual characters
const characters = text.split('');

// Create a new HTML content with span elements and the touch class for each character
const newContent = characters.map(function (char) {
    return `<span class="touch">${char}</span>`;
}).join('');

// Set the new content to the h1 element
h1Element.innerHTML = newContent;

// Get a reference to the navbar element
const navbar = document.getElementById('navbar');

// Function to handle the scroll event
function handleScroll() {
    // Get the current scroll position
    const scrollY = window.scrollY;
    console.log(scrollY);
    // Define a threshold for when to apply the scrolled styles
    const scrollThreshold = 200; // Adjust as needed

    // Check if the user has scrolled past the threshold
    if (scrollY > scrollThreshold) {
        // Add the 'scrolled' class to the navbar
        navbar.classList.add('scrolled');
    } else {
        // Remove the 'scrolled' class from the navbar
        navbar.classList.remove('scrolled');
    }
}

// Attach the scroll event listener to the window
window.addEventListener('scroll', handleScroll);


function setupTypingEffect(elementId, textValues) {
    const dynamicTextElement = document.getElementById(elementId);
    let currentIndex = 0;
    let currentText = "";

    function typeText() {
        const targetText = textValues[currentIndex];
        currentText = targetText.substring(0, currentText.length + 1);
        dynamicTextElement.textContent = currentText;

        if (currentText === targetText) {
            setTimeout(eraseText, 5000);
        } else {
            setTimeout(typeText, 100);
        }
    }

    function eraseText() {
        currentText = currentText.substring(0, currentText.length - 1);
        dynamicTextElement.textContent = currentText;

        if (currentText === "") {
            currentIndex = (currentIndex + 1) % textValues.length;
            setTimeout(typeText, 500);
        } else {
            setTimeout(eraseText, 50);
        }
    }

    return {
        start: function () {
            typeText();
        },
    };
}

const textValuesJap = [
    "ようこそ",
    "Welcome to",
    "Selamat Datang di",
    // Add more text values as needed
];

const textValuesEng = [
    "最高のクラス",
    "The Best Class",
    "Kelas Terbaik",
    // Add more text values as needed
];

const typingEffectJap = setupTypingEffect("jap", textValuesJap);
const typingEffectEng = setupTypingEffect("eng", textValuesEng);

typingEffectJap.start();
typingEffectEng.start();
