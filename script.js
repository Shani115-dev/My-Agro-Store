// script.js
const menuToggle = document.getElementById("menu-toggle");
const naviLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    naviLinks.classList.toggle("active");
});

    // Get references to the elements
const hamburger = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navLinks');

// Function to toggle navbar visibility based on screen size
function toggleNavbar() {
    if (window.innerWidth <= 786) {
        // For screens smaller than or equal to 786px, toggle the navbar on hamburger click
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    }
}

// Add event listener to hamburger menu for mobile screens
hamburger.addEventListener('click', toggleNavbar);

// Hide navbar when a link is clicked (only for smaller screens)
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 786) {
            navLinks.style.display = 'none'; // Hide navbar on link click (mobile)
        }
    });
});

// Check window size on resize and adjust navbar visibility
window.addEventListener('resize', () => {
    if (window.innerWidth > 786) {
        navLinks.style.display = 'flex'; // Keep navbar visible on larger screens
    } else {
        navLinks.style.display = 'none'; // Hide navbar on smaller screens by default
    }
});

// Initialize navbar state based on screen width
if (window.innerWidth <= 786) {
    navLinks.style.display = 'none'; // Hide navbar initially on small screens
} else {
    navLinks.style.display = 'flex'; // Keep navbar visible on larger screens
}
