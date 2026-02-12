
function showAlert(message) {
  alert(message);
}

// Show one section and hide the others
function showSection(id) {
  const sections = document.querySelectorAll('.page');
  sections.forEach(s => s.hidden = (s.id !== id));

  // update active nav link
  const links = document.querySelectorAll('nav a');
  links.forEach(a => a.classList.toggle('active', a.dataset.target === id));
}

// Simple navigation click handler
function initNavigation() {
  document.querySelector('nav').addEventListener('click', function(e) {
    const a = e.target.closest('a');
    if (!a) return;
    const id = a.dataset.target;
    if (!id) return;
    e.preventDefault();
    // set hash for direct linking
    window.location.hash = id;
    showSection(id);
  });
}

// Bind buttons and form
function initActions() {
  const homeBtn = document.getElementById('homeButton');
  if (homeBtn) homeBtn.addEventListener('click', () => showAlert('Hello! Thanks for clicking.'));

  const aboutBtn = document.getElementById('aboutButton');
  if (aboutBtn) aboutBtn.addEventListener('click', () => showAlert('Hello from About.'));

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      showAlert('Thank you! Message received (demo).');
      form.reset();
    });
  }
}

// On page load, initialize everything
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initActions();

  // Show section from hash or default to home
  const hash = window.location.hash.replace('#','');
  showSection(hash || 'home');
});
