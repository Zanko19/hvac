// Gestion des interactions
export function initializeInteractions() {
  // Navigation mobile
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Smooth scroll pour les liens de navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Fermer le menu mobile si ouvert
        if (mobileMenu) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
  
  // Gestion du formulaire de contact
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulation d'envoi (remplacer par vraie logique d'envoi)
      const formData = new FormData(this);
      
      // Afficher un message de confirmation
      const button = this.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      button.textContent = 'Message envoyé !';
      button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
      button.classList.add('bg-green-600');
      button.disabled = true;
      
      // Reset après 3 secondes
      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('bg-green-600');
        button.classList.add('bg-blue-600', 'hover:bg-blue-700');
        button.disabled = false;
        this.reset();
      }, 3000);
    });
  }
  
  // Animation des éléments au scroll (simple)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);
  
  // Observer les sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
}
