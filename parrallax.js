// Function to listen for the scroll event
function ListenForScrolling() {
    window.addEventListener("scroll", DoTheParallax); // Listen for scroll event
}

// Function to create the parallax effect
function DoTheParallax() {
    const IMG_PARALLAX = document.getElementById("image-parallax");
    const PARALLAX_BACKGROUND = document.querySelector('.parallax-background');

    let yPosition = window.scrollY; // Get current scroll position

    // Create parallax with different speeds
    let parallaxSpeed = yPosition * 0.3; // Controls the speed of the background
    let imageSpeed = yPosition * 0.5; // Controls the speed of the main image

    // Move the background at a different speed and apply the parallax effect
    PARALLAX_BACKGROUND.style.transform = `translateY(${parallaxSpeed}px)`;

    // Move the main image at a different speed and apply a slight zoom effect
    IMG_PARALLAX.style.transform = `translateY(${imageSpeed}px) scale(1.05)`; // Slight zoom when scrolling
}

// Execute the function to listen for the scroll event
ListenForScrolling();
