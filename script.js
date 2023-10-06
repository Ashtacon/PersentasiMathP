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


const jap = document.getElementById('jap');

const typewriter = new Typewriter(jap, {
    loop: true
});

typewriter.typeString('Welcome to <br> <span class="teritary">The Best Class</span>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('最高のクラス <br> <span class="teritary">へようこそ</span>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('꧋ꦱꦸꦒꦺꦁꦫꦮꦸꦃ<br> <span class="teritary">ꦆꦁꦏꦺꦭꦱ꧀ꦏꦸꦭ</span>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Selamat Datang Di <br> <span class="teritary">Kelas Terbaik</span>')
    .pauseFor(2500)
    .deleteAll()
    .start();
