
  // Services data
  const services = [
    "General Logistics & Freight Forwarding", "Mining Support Services", "Hazardous Materials Transport",
    "Warehousing & Distribution", "Heavy Machinery Transport", "Bulk Material Haulage",
    "Supply Chain Optimization", "Fleet Management Solutions", "Project Cargo Handling",
    "Cross-Border Logistics", "On-Site Mining Logistics", "Container Transport",
    "Breakbulk & Oversized Cargo", "24/7 Emergency Logistics", "Inventory Management", "Customs Clearance Assistance"
  ];

  const servicesGrid = document.getElementById('servicesGrid');
  if(servicesGrid) {
    services.forEach((service, idx) => {
      const card = document.createElement('div');
      card.className = 'service-card reveal reveal-delay-' + (idx % 3 + 1);
      card.innerHTML = `
        <div class="service-icon">⚙️</div>
        <div class="service-name">${service}</div>
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