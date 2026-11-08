// Dynamic Category Filter Script
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    // 1. Manage Active Button State
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // 2. Filter Projects
    const filterValue = button.getAttribute('data-filter');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filterValue === 'all' || filterValue === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const nameInput = document.getElementById('name').value;
  const statusElement = document.getElementById('formStatus');

  statusElement.style.color = '#16a34a';
  statusElement.textContent = `Thank you, ${nameInput}! Your message has been sent successfully.`;

  this.reset();
});