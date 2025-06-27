<!-- Already provided full HTML structure above -->

<script>
  // Navigation toggle for mobile
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.fade-in').forEach(function(el) {
      el.classList.add('fade-in-active');
    });

    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  });

  // Smooth scroll effect for navigation links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Search form submit functionality (placeholder)
  document.querySelector('.search-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.querySelector('.search-input').value;
    alert('Search submitted for: ' + query); // Replace with real search function
  });
</script>
