// script.js

function countdown() {
  const eventDate = new Date("2025-06-19T00:00:00");
  const now = new Date();
  const diff = eventDate - now;

  const countdownEl = document.getElementById("countdown");

  if (diff <= 0) {
    countdownEl.textContent = "L'événement est en cours!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent =
    `Commence dans ${days} jours, ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(countdown, 1000);
countdown();

// Scroll fade-in animation
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.1
});

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});