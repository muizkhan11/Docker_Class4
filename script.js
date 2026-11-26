
/* ==============================
   1. MOBILE NAVIGATION
============================== */

// Select menu elements
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Open and close the mobile menu
menuToggle.addEventListener('click', () => {

  const isOpen = navLinks.classList.toggle('is-open');

  // Update accessibility attributes
  menuToggle.setAttribute('aria-expanded', String(isOpen));

  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Close navigation' : 'Open navigation'
  );

});

// Close menu when a navigation link is clicked
navLinks.querySelectorAll('a').forEach((link) => {

  link.addEventListener('click', () => {

    navLinks.classList.remove('is-open');

    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.setAttribute('aria-label', 'Open navigation');

  });

});


/* ==============================
   2. AUTOMATIC FOOTER YEAR
============================== */

// Display the current year automatically
document.getElementById('year').textContent =
  new Date().getFullYear();


/* ==============================
   3. CONTACT FORM
============================== */

// Select form elements
const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

// Handle form submission
contactForm.addEventListener('submit', (event) => {

  // Prevent page refresh
  event.preventDefault();

  // Check whether all required fields are valid
  if (!contactForm.checkValidity()) {

    contactForm.reportValidity();
    return;

  }

  // Get visitor's name
  const visitorName = document
    .getElementById('name')
    .value.trim();

  // Display confirmation message
  formNote.textContent =
    `Thanks, ${visitorName}! Your message is ready to be connected to an email service.`;

  // Clear form fields
  contactForm.reset();

});
