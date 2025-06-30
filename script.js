// Navigation toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.fade-in').forEach(function(el) {
    el.classList.add('fade-in-active');
  });

  const toggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  }

  // Smooth scroll effect for navigation links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          // Optionally collapse nav on mobile after click
          navLinks.classList.remove('show');
        }
      }
    });
  });

  // Search form submit functionality (placeholder)
  const searchForm = document.querySelector('.search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const queryInput = document.querySelector('.search-input');
      const query = queryInput ? queryInput.value : '';
      alert('Search submitted for: ' + query); // Replace with real search function
    });
  }
});
