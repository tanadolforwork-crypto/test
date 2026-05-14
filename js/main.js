// ==========================================
// PROGRESS BAR
// ==========================================

window.addEventListener('scroll', () => {

  const scrollTop = window.scrollY;

  const docHeight =
    document.body.scrollHeight - window.innerHeight;

  const progress =
    (scrollTop / docHeight) * 100;

  document.getElementById('progress').style.width =
    progress + '%';

});

// ==========================================
// CURSOR GLOW
// ==========================================

const glow =
  document.getElementById('cursorGlow');

document.addEventListener('mousemove', e => {

  glow.style.left = e.clientX + 'px';

  glow.style.top = e.clientY + 'px';

});

// ==========================================
// HERO PARTICLES
// ==========================================

const particles =
  document.getElementById('particles');

if (particles) {

  for (let i = 0; i < 24; i++) {

    const span =
      document.createElement('span');

    const size =
      Math.random() * 5 + 2;

    span.style.cssText = `
      width:${size}px;
      height:${size}px;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      --dur:${Math.random() * 8 + 6}s;
      --delay:-${Math.random() * 10}s;
    `;

    particles.appendChild(span);

  }

}

// ==========================================
// REVEAL ON SCROLL
// ==========================================

const revealObserver =
  new IntersectionObserver(

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
// PROJECT CARD HOVER EFFECT
// ==========================================

document.querySelectorAll('.proj-card').forEach(card => {

  card.addEventListener('mousemove', e => {

    if (window.innerWidth < 992) return;

    const rect =
      card.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-y * 6}deg)
      rotateY(${x * 6}deg)
      translateY(-8px)
    `;

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform = '';

  });

});

// ==========================================
// CLIENT CARD HOVER EFFECT
// ==========================================

document.querySelectorAll('.client-feature').forEach(card => {

  card.addEventListener('mousemove', e => {

    if (window.innerWidth < 992) return;

    const rect =
      card.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-y * 5}deg)
      rotateY(${x * 5}deg)
      translateY(-8px)
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

  const nav =
    document.getElementById('mainNav');

  if (!nav) return;

  if (window.scrollY > 60) {

    nav.style.paddingTop = '10px';
    nav.style.paddingBottom = '10px';

    nav.style.background =
      'rgba(7,11,18,.92)';

    nav.style.backdropFilter =
      'blur(24px)';

  }

  else {

    nav.style.paddingTop = '18px';
    nav.style.paddingBottom = '18px';

    nav.style.background =
      'rgba(7,11,18,.72)';

  }

});

// ==========================================
// MOBILE NAV TOGGLE
// ==========================================

const navToggle =
  document.getElementById('navToggle');

const navCollapse =
  document.getElementById('navLinksCollapse');

if (navToggle && navCollapse) {

  navToggle.addEventListener('click', () => {

    navToggle.classList.toggle('open');

    navCollapse.classList.toggle('show');

  });

}

// ==========================================
// AUTO CLOSE MOBILE MENU
// ==========================================

document.querySelectorAll('.nav-link').forEach(link => {

  link.addEventListener('click', () => {

    navToggle?.classList.remove('open');

    navCollapse?.classList.remove('show');

  });

});

// ==========================================
// PROJECT SLIDER
// ==========================================

const projectTrack =
  document.querySelector('.project-track');

const projectSlides =
  document.querySelectorAll('.project-slide');

const projectPrev =
  document.getElementById('projectPrev');

const projectNext =
  document.getElementById('projectNext');

let projectIndex = 0;

function updateProjectSlider() {

  if (!projectTrack) return;

  projectTrack.style.transform =
    `translateX(-${projectIndex * 100}%)`;

}

if (projectNext) {

  projectNext.addEventListener('click', () => {

    projectIndex++;

    if (projectIndex >= projectSlides.length) {

      projectIndex = 0;

    }

    updateProjectSlider();

  });

}

if (projectPrev) {

  projectPrev.addEventListener('click', () => {

    projectIndex--;

    if (projectIndex < 0) {

      projectIndex =
        projectSlides.length - 1;

    }

    updateProjectSlider();

  });

}

// ==========================================
// CLIENT SLIDER
// ==========================================

const clientTrack =
  document.querySelector('.client-track');

const clientSlides =
  document.querySelectorAll('.client-slide');

const clientPrev =
  document.getElementById('clientPrev');

const clientNext =
  document.getElementById('clientNext');

let clientIndex = 0;

function updateClientSlider() {

  if (!clientTrack) return;

  clientTrack.style.transform =
    `translateX(-${clientIndex * 100}%)`;

}

if (clientNext) {

  clientNext.addEventListener('click', () => {

    clientIndex++;

    if (clientIndex >= clientSlides.length) {

      clientIndex = 0;

    }

    updateClientSlider();

  });

}

if (clientPrev) {

  clientPrev.addEventListener('click', () => {

    clientIndex--;

    if (clientIndex < 0) {

      clientIndex =
        clientSlides.length - 1;

    }

    updateClientSlider();

  });

}

// ==========================================
// KEYBOARD SLIDER CONTROL
// ==========================================

document.addEventListener('keydown', e => {

  if (e.key === 'ArrowRight') {

    if (projectNext) {

      projectNext.click();

    }

  }

  if (e.key === 'ArrowLeft') {

    if (projectPrev) {

      projectPrev.click();

    }

  }

});

// ==========================================
// TOUCH SWIPE PROJECT SLIDER
// ==========================================

let startX = 0;

const projectSlider =
  document.querySelector('.project-slider');

if (projectSlider) {

  projectSlider.addEventListener('touchstart', e => {

    startX = e.touches[0].clientX;

  });

  projectSlider.addEventListener('touchend', e => {

    const endX =
      e.changedTouches[0].clientX;

    const diff =
      startX - endX;

    if (diff > 50) {

      projectNext?.click();

    }

    else if (diff < -50) {

      projectPrev?.click();

    }

  });

}

// ==========================================
// TOUCH SWIPE CLIENT SLIDER
// ==========================================

let clientStartX = 0;

const clientSlider =
  document.querySelector('.client-slider');

if (clientSlider) {

  clientSlider.addEventListener('touchstart', e => {

    clientStartX =
      e.touches[0].clientX;

  });

  clientSlider.addEventListener('touchend', e => {

    const endX =
      e.changedTouches[0].clientX;

    const diff =
      clientStartX - endX;

    if (diff > 50) {

      clientNext?.click();

    }

    else if (diff < -50) {

      clientPrev?.click();

    }

  });

}
