// Get elements
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle the "active" class on the nav-links when hamburger icon is clicked
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
