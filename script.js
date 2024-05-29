// JavaScript code for interactivity

// Toggle mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
