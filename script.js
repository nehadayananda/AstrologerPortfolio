document.addEventListener('DOMContentLoaded', () => {
  const celestialToggle = document.querySelector('.celestial-toggle');
  const body = document.body;
  let isTypingComplete = false;

  // Theme toggle functionality
  celestialToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
  });

  // Typing animation completion detection
  const typingText = document.querySelector('.typing-text');
  
  // Calculate animation duration from CSS
  const style = window.getComputedStyle(typingText);
  const animationDuration = parseFloat(style.animationDuration) * 1000;

  setTimeout(() => {
    isTypingComplete = true;
    typingText.classList.add('typing-complete');
  }, animationDuration);

  // WhatsApp functionality
  const whatsappButton = document.getElementById('whatsappButton');
  whatsappButton.addEventListener('click', (e) => {
    const message = encodeURIComponent('Hello, I would like to book a consultation.');
    window.open(`https://wa.me/918130105282?text=${message}`, '_blank');
  });

  // Animate services on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
  });

  // Smooth scroll for navigation
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
});