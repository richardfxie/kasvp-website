// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      const isHidden = mobileMenu.classList.contains('hidden');

      if (isHidden) {
        // Show menu
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
          mobileMenu.classList.add('visible');
        }, 10);
        mobileMenuBtn.classList.add('hamburger-open');
      } else {
        // Hide menu
        mobileMenu.classList.remove('visible');
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 200);
        mobileMenuBtn.classList.remove('hamburger-open');
      }
    });

    // Close menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('visible');
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 200);
        mobileMenuBtn.classList.remove('hamburger-open');
      });
    });
  }

  // Set current year in footer
  const currentYearElements = document.querySelectorAll('#current-year, #current-year-legal');
  const currentYear = new Date().getFullYear();
  currentYearElements.forEach(el => {
    if (el) {
      el.textContent = currentYear;
    }
  });

  // Active navigation highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    // Normalize paths for comparison
    const normalizedCurrent = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
    const normalizedLink = linkPath === '/' ? '/' : linkPath.replace(/\/$/, '');

    // Check if paths match
    if (normalizedCurrent === normalizedLink) {
      link.classList.add('active');
      link.style.opacity = '1';
    } else if (normalizedCurrent.startsWith('/team/') && normalizedLink === '/team.html') {
      // Special case: team member pages should highlight the TEAM nav item
      link.classList.add('active');
      link.style.opacity = '1';
    } else {
      link.classList.remove('active');
      link.style.opacity = link.closest('.md\\:hidden, .hidden') ? '0.7' : '0.8';
    }
  });
});
