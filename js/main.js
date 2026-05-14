// Progress bar
window.addEventListener('scroll', () => {
  const p = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('progress').style.width = p + '%';
});

// Cursor glow
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Particles
const pc = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
  const s = document.createElement('span');
  const sz = Math.random() * 4 + 2;
  s.style.cssText = `
    width:${sz}px; height:${sz}px;
    left:${Math.random()*100}%;
    top:${Math.random()*100}%;
    --dur:${Math.random()*6+4}s;
    --delay:-${Math.random()*8}s;
  `;
  pc.appendChild(s);
}

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Tilt on project cards
document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `translateY(-8px) scale(1.01) rotateX(${-y*4}deg) rotateY(${x*4}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Nav shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 60) {
    nav.style.padding = '10px 56px';
  } else {
    nav.style.padding = '16px 56px';
  }
});
