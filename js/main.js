// ==========================================
// PROGRESS BAR
// ==========================================

window.addEventListener('scroll', () => {

  const scrollTop = window.scrollY;

  const docHeight =
    document.body.scrollHeight - window.innerHeight;

  const progress = (scrollTop / docHeight) * 100;

  document.getElementById('progress').style.width =
    progress + '%';

});

// ==========================================
// REVEAL ON SCROLL
// ==========================================

const revealObserver = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        revealObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);

document.querySelectorAll('.reveal').forEach(el => {

  revealObserver.observe(el);

});

// ==========================================
// PROJECT CARD HOVER
// ==========================================

document.querySelectorAll('.proj-card').forEach(card => {

  card.addEventListener('mousemove', e => {

    const rect = card.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `
      translateY(-8px)
      rotateX(${-y * 4}deg)
      rotateY(${x * 4}deg)
    `;

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform = '';

  });

});

// ==========================================
// NAVBAR SHRINK
// ==========================================

window.addEventListener('scroll', () => {

  const nav = document.getElementById('mainNav');

  if (window.scrollY > 50) {

    nav.style.paddingTop = '10px';
    nav.style.paddingBottom = '10px';

    nav.style.background =
      'rgba(8,11,17,.92)';

  }

  else {

    nav.style.paddingTop = '16px';
    nav.style.paddingBottom = '16px';

    nav.style.background =
      'rgba(8,11,17,.75)';

  }

});

// ==========================================
// MOBILE NAV
// ==========================================

const navToggle =
  document.getElementById('navToggle');

const navCollapse =
  document.getElementById('navLinksCollapse');

if (navToggle) {

  navToggle.addEventListener('click', () => {

    navToggle.classList.toggle('open');

    navCollapse.classList.toggle('show');

  });

}

// ==========================================
// HORIZONTAL SLIDER
// ==========================================

document.querySelectorAll('.slider-btn').forEach(btn => {

  btn.addEventListener('click', () => {

    const target =
      document.getElementById(
        btn.dataset.target
      );

    const direction =
      btn.classList.contains('next')
      ? 1
      : -1;

    target.scrollBy({

      left: direction * 450,

      behavior: 'smooth'

    });

  });

});
