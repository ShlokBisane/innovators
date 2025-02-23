// Toggle Mobile Navigation Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Smooth Animation for Image Slider
const slider = document.querySelector('.slider img');
slider.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition effect

// Function to trigger animation
function animateSlider() {
    slider.style.transform = 'translateX(0)'; // Example animation
}

// Call the animation function on load
window.onload = animateSlider;
