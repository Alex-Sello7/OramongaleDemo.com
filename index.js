// Services data with unique SVG icons
  const services = [
    { name: "General Logistics & Freight Forwarding", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>` },
    { name: "Mining Support Services", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>` },
    { name: "Hazardous Materials Transport", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>` },
    { name: "Warehousing & Distribution", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>` },
    { name: "Heavy Machinery Transport", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>` },
    { name: "Bulk Material Haulage", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>` },
    { name: "Supply Chain Optimization", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 012 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>` },
    { name: "Fleet Management Solutions", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>` },
    { name: "Project Cargo Handling", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>` },
    { name: "Cross-Border Logistics", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>` },
    { name: "On-Site Mining Logistics", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>` },
    { name: "Container Transport", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>` },
    { name: "Breakbulk & Oversized Cargo", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="5 9 2 12 5 15"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/></svg>` },
    { name: "24/7 Emergency Logistics", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
    { name: "Inventory Management", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>` },
    { name: "Customs Clearance Assistance", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>` },
  ];

  const servicesGrid = document.getElementById('servicesGrid');
  if(servicesGrid) {
    services.forEach((service, idx) => {
      const card = document.createElement('div');
      card.className = 'service-card reveal reveal-delay-' + (idx % 3 + 1);
      card.innerHTML = `
        <div class="service-icon">${service.icon}</div>
        <div class="service-name">${service.name}</div>
        <div class="service-num">${(idx+1).toString().padStart(2,'0')}</div>
      `;
      servicesGrid.appendChild(card);
    });
  }

  // Loader
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
      if(loader) loader.classList.add('hidden');
    }, 1000);
  });

  // Navbar scroll + hamburger
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
  
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if(hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const expanded = navLinks.classList.contains('open');
      hamburger.setAttribute('aria-expanded', expanded);
    });
  }

  // Scroll reveal Intersection Observer
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => revealObserver.observe(el));
  
  // Hero loaded animation
  const hero = document.getElementById('hero');
  if(hero) hero.classList.add('loaded');

  // Form handling (demo)
  const formSubmit = document.getElementById('formSubmit');
  const formNotice = document.getElementById('formNotice');
  if(formSubmit) {
    formSubmit.addEventListener('click', () => {
      const name = document.getElementById('fname')?.value.trim();
      const email = document.getElementById('femail')?.value.trim();
      const msg = document.getElementById('fmsg')?.value.trim();
      if(!name || !email || !msg) {
        if(formNotice) {
          formNotice.textContent = 'Please fill in all required fields.';
          formNotice.classList.add('error');
          formNotice.style.display = 'block';
          setTimeout(() => { if(formNotice) formNotice.style.display = 'none'; }, 3000);
        }
        return;
      }
      if(formNotice) {
        formNotice.textContent = '✓ Request sent! We will get back to you shortly.';
        formNotice.classList.remove('error');
        formNotice.style.display = 'block';
        setTimeout(() => { if(formNotice) formNotice.style.display = 'none'; }, 4000);
      }
      // reset placeholder
      const fname = document.getElementById('fname');
      const femail = document.getElementById('femail');
      const fphone = document.getElementById('fphone');
      const fmsg = document.getElementById('fmsg');
      if(fname) fname.value = '';
      if(femail) femail.value = '';
      if(fphone) fphone.value = '';
      if(fmsg) fmsg.value = '';
    });
  }
  // ─── BACK TO TOP ───
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) backToTop.classList.add('visible');
      else backToTop.classList.remove('visible');
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── ACTIVE NAV LINK ON SCROLL ───
  const sections = document.querySelectorAll('section[id], div[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const activateNav = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navAnchors.forEach(a => {
      a.classList.remove('nav-active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('nav-active');
    });
  };
  window.addEventListener('scroll', activateNav);
  activateNav();

  // ─── ANIMATED STAT COUNTERS ───
  const statNums = document.querySelectorAll('.stat-num');
  const animateCounter = (el) => {
    const text = el.textContent.trim();
    const numMatch = text.match(/\d+/);
    if (!numMatch) return;
    const target = parseInt(numMatch[0]);
    const suffix = text.replace(/[\d]/g, '');
    const duration = 1800;
    const start = performance.now();
    const startVal = Math.max(0, target - 80);
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startVal + (target - startVal) * ease);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => counterObserver.observe(el));

  // ─── TESTIMONIALS SLIDER (mobile/tablet) ───
  const track = document.getElementById('testimonialsTrack');
  const dotsWrap = document.getElementById('testiDots');
  const cards = track ? Array.from(track.children) : [];
  let currentSlide = 0;

  const isMobile = () => window.innerWidth <= 960;

  const buildDots = () => {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    if (!isMobile()) return;
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'testi-dot' + (i === currentSlide ? ' active' : '');
      dot.addEventListener('click', () => goToSlide(i));
      dotsWrap.appendChild(dot);
    });
  };

  const goToSlide = (idx) => {
    if (!isMobile()) return;
    currentSlide = idx;
    track.style.transform = `translateX(-${idx * 100}%)`;
    track.style.gridTemplateColumns = `repeat(${cards.length}, 100%)`;
    document.querySelectorAll('.testi-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  };

  const initSlider = () => {
    if (isMobile()) {
      track.style.gridTemplateColumns = `repeat(${cards.length}, 100%)`;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      buildDots();
    } else {
      track.style.gridTemplateColumns = '';
      track.style.transform = '';
      if (dotsWrap) dotsWrap.innerHTML = '';
    }
  };

  window.addEventListener('resize', initSlider);
  initSlider();

  // ─── COOKIE BANNER ───
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAccept = document.getElementById('cookieAccept');
  const cookieDecline = document.getElementById('cookieDecline');

  if (cookieBanner && !localStorage.getItem('cookieConsent')) {
    setTimeout(() => cookieBanner.classList.add('visible'), 1800);
  }

  const closeCookie = (choice) => {
    localStorage.setItem('cookieConsent', choice);
    cookieBanner.classList.remove('visible');
  };

  if (cookieAccept) cookieAccept.addEventListener('click', () => closeCookie('accepted'));
  if (cookieDecline) cookieDecline.addEventListener('click', () => closeCookie('declined'));