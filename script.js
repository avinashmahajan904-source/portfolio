
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
 
const revealTargets = document.querySelectorAll(
  '.about-grid, .skills-grid, .projects-grid, .contact-inner, .stat, .skill-card, .project-card'
);
 
revealTargets.forEach(el => el.classList.add('reveal'));
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
 
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
 

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1400;
  const step = target / (duration / 16);
  let current = 0;
 
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, 16);
}
 
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
 
document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));
 
const nav = document.querySelector('.nav');
 
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 2px 24px rgba(0,0,0,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
 
 
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
 
window.addEventListener('scroll', () => {
  let current = '';
 
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
 
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--fg)';
    }
  });
});
 
 
document.querySelectorAll('.skill-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.07}s`;
});
 
document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.07}s`;
});
 
console.log('%c👋 Hey there, fellow developer!', 'font-size:16px; font-weight:bold; color:#2d6a4f;');
console.log('%cThanks for peeking at the source. Let\'s connect!', 'font-size:12px; color:#888884;');
