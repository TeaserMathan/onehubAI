// main.js – Professional animations for OneHubAI

// ========== Animate elements on scroll ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.section, .service-card').forEach((el) => {
  observer.observe(el);
});

// ========== Mobile Menu Toggle (if you want later) ==========
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}
