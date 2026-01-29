// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const formMessage = document.getElementById('form-message');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      // Basic validation
      if (!data.name || !data.email || !data.subject || !data.message) {
        showMessage('Please fill in all fields.', 'error');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
      }

      // Set loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      formMessage.classList.add('hidden');

      try {
        // Simulate form submission
        // Replace this with actual form handling (e.g., FormSpree, Netlify Forms, etc.)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Show success message
        showMessage('Thank you! Your message has been sent.', 'success');

        // Reset form
        contactForm.reset();
      } catch (error) {
        // Show error message
        showMessage('Something went wrong. Please try again.', 'error');
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    });
  }

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = type === 'success'
      ? 'success-message text-green-400 text-center'
      : 'error-message text-red-400 text-center';
    formMessage.classList.remove('hidden');
  }
});
