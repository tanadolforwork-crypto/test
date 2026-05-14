const progressBar = document.getElementById('progress');
      height:${size}px;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      --dur:${Math.random() * 8 + 8}s;
      --delay:-${Math.random() * 10}s;
    `;

    particles.appendChild(span);
  }
}

// =========================
// REVEAL
// =========================

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('visible');

      observer.unobserve(entry.target);
    }
  });

}, {
  threshold: 0.15
});

const revealElements =
  document.querySelectorAll('.reveal');

revealElements.forEach(el => {
  observer.observe(el);
});

// =========================
// CARD HOVER
// =========================

function initTilt(selector, rotate = 5) {

  if (window.innerWidth < 992) return;

  document.querySelectorAll(selector).forEach(card => {

    card.addEventListener('mousemove', e => {

      const rect = card.getBoundingClientRect();

      const x =
        (e.clientX - rect.left) / rect.width - 0.5;

      const y =
        (e.clientY - rect.top) / rect.height - 0.5;

      card.style.transform = `
        perspective(1000px)
        rotateX(${-y * rotate}deg)
        rotateY(${x * rotate}deg)
        translateY(-6px)
      `;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

initTilt('.proj-card', 6);
initTilt('.client-feature', 5);
