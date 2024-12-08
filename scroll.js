// Function to reveal elements when scrolling
function Reveal() {
  // Select all elements with the class 'reveal'
  const REVEALS = document.querySelectorAll(".reveal");

  // Loop through each element
  for (let i = 0; i < REVEALS.length; i++) {
    const WINDOW_HEIGHT = window.innerHeight; // Window height
    const ELEMENT_TOP = REVEALS[i].getBoundingClientRect().top; // Position of the element
    const ELEMENT_VISIBLE = 150; // Distance from where the element is visible

    // If the element is visible in the window (with a margin of 150px)
    if (ELEMENT_TOP < WINDOW_HEIGHT - ELEMENT_VISIBLE) {
      REVEALS[i].classList.add("active"); // Add the 'active' class to the element
    } else {
      REVEALS[i].classList.remove("active"); // Remove the 'active' class if the element is not visible
    }
  }
}

// Run the function when scrolling the window
window.addEventListener("scroll", Reveal, { passive: true });
