// === Mobile Menu Toggle ===
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('showing');
});

// === Contact Form Handling (Demo only) ===
const contactForm = document.querySelector('form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you for contacting us. We'll get back to you soon!");
    contactForm.reset();
  });
}
