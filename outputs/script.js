const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const targets = document.querySelectorAll('.service-card, .project, .about-copy, .quote-form');
targets.forEach(target => target.classList.add('reveal'));
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
targets.forEach(target => observer.observe(target));
document.querySelector('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-status').textContent = 'Thanks! This form is ready to connect to your preferred email or form service.';
});
