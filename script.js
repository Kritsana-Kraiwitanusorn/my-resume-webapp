/* ============================================================
   script.js — Kritsana Portfolio (Optimised & Clean)
   ============================================================ */

'use strict';

// ── Helpers ──────────────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);

// ── Scroll-aware Navbar ──────────────────────────────────────
const navbar = $('#navbar');
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load

// ── Hamburger Menu ───────────────────────────────────────────
const hamburger = $('#hamburger');
const navMenu   = $('#navMenu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navMenu.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close menu when a nav link is clicked
navMenu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    hamburger.classList.remove('open');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  }
});

// ── Reveal on Scroll (IntersectionObserver) ──────────────────
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el    = entry.target;
    const delay = +(el.dataset.delay || 0);
    setTimeout(() => el.classList.add('visible'), delay);
    revealObserver.unobserve(el);
  }),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

$$('.reveal').forEach(el => revealObserver.observe(el));

// ── Typewriter Effect (hero name) ────────────────────────────
const heroName = $('.hero-name');
if (heroName) {
  const fullText  = heroName.textContent.trim();
  heroName.textContent = '';
  heroName.style.minHeight = '1.2em'; // prevent layout shift

  let i = 0;
  const type = () => {
    if (i < fullText.length) {
      heroName.textContent += fullText[i++];
      setTimeout(type, 55);
    }
  };

  window.addEventListener('load', () => setTimeout(type, 600), { once: true });
}

// ── Experience Modals ─────────────────────────────────────────
const lockScroll   = () => document.body.style.overflow = 'hidden';
const unlockScroll = () => document.body.style.overflow = '';

function openModal(id) {
  const modal = $(`#${id}Modal`);
  if (!modal) return;
  modal.style.display = 'block';
  lockScroll();
}

function closeModal(id) {
  const modal = $(`#${id}Modal`);
  if (!modal) return;
  modal.style.display = 'none';
  unlockScroll();
}

// ── Gallery Data ──────────────────────────────────────────────
const galleryData = {
  DataCamp: {
    title: 'DataCamp Certificates',
    images: [
      { url: 'Image/Certificate/DataCamp/01.png', description: 'Understanding Data Science',       completed: 'Sep 2020' },
      { url: 'Image/Certificate/DataCamp/02.png', description: 'Data Science for Business',        completed: 'Sep 2020' },
      { url: 'Image/Certificate/DataCamp/03.png', description: 'Introduction to R',                completed: 'Sep 2020' },
      { url: 'Image/Certificate/DataCamp/04.png', description: 'Machine Learning for Business',    completed: 'Sep 2020' },
      { url: 'Image/Certificate/DataCamp/05.png', description: 'Understanding Data Engineering',   completed: 'Sep 2020' },
      { url: 'Image/Certificate/DataCamp/06.png', description: 'Understanding Data Visualization', completed: 'Sep 2020' },
      { url: 'Image/Certificate/DataCamp/07.png', description: 'Understanding Machine Learning',   completed: 'Sep 2020' },
      { url: 'Image/Certificate/DataCamp/08.png', description: 'Data Manipulation with Pandas',    completed: 'Sep 2023' },
      { url: 'Image/Certificate/DataCamp/09.png', description: 'Data Manipulation to Python',      completed: 'Nov 2024' },
      { url: 'Image/Certificate/DataCamp/10.png', description: 'Data Manipulation in SQL',         completed: 'Nov 2024' },
    ],
  },

  '365 Data Science': {
    title: '365 Data Science Certificates',
    images: [
      { url: 'Image/Certificate/365 Data Science/01.png', description: 'Data Analyst Career Track',                               completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/02.png', description: 'Introduction to Excel',                                   completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/03.png', description: 'SQL',                                                     completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/04.png', description: 'Advanced SQL',                                            completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/05.png', description: 'Data Cleaning and Preprocessing with Pandas',             completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/06.png', description: 'Introduction to Data and Data Science',                   completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/07.png', description: 'Introduction to Python',                                  completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/08.png', description: 'SQL for Data Science Interviews',                         completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/09.png', description: 'Statistics',                                              completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/10.png', description: 'Data Preprocessing with NumPy',                           completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/11.png', description: 'Data Visualization with Python, R, Tableau and Excel',    completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/12.png', description: 'Machine Learning in Python',                              completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/13.png', description: 'Mathematics',                                             completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/14.png', description: 'Python Programmer Bootcamp',                              completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/15.png', description: 'Deep Learning with TensorFlow 2',                         completed: 'Nov 2024' },
      { url: 'Image/Certificate/365 Data Science/16.png', description: 'Probability',                                             completed: 'Nov 2024' },
    ],
  },

  DataRockie: {
    title: 'DataRockie Certificates',
    images: [
      { url: 'Image/Certificate/DataRockie/01.png', description: 'Correlation and Regression for the Curious',    completed: 'Mar 2024' },
      { url: 'Image/Certificate/DataRockie/02.png', description: 'Mini Data Science Bootcamp 2023',               completed: 'Apr 2024' },
      { url: 'Image/Certificate/DataRockie/03.png', description: 'SQL Crash Course',                              completed: 'Apr 2024' },
      { url: 'Image/Certificate/DataRockie/04.png', description: 'Google Sheets Crash Course',                    completed: 'Apr 2024' },
      { url: 'Image/Certificate/DataRockie/05.png', description: 'Mini Data Science Bootcamp 2024',               completed: 'Apr 2024' },
      { url: 'Image/Certificate/DataRockie/06.png', description: 'Data Analyst Manifesto',                        completed: 'Dec 2024' },
      { url: 'Image/Certificate/DataRockie/07.png', description: 'Mini Bootcamp 2025',                            completed: 'Mar 2025' },
      { url: 'Image/Certificate/DataRockie/08.png', description: 'AI for Everyone',                               completed: 'Mar 2026' },
    ],
  },

  BorntoDev: {
    title: 'BorntoDev Certificates',
    images: [
      { url: 'Image/Certificate/BorntoDev/01.png', description: 'Essential SQL for Everyone',   completed: 'May 2025' },
      { url: 'Image/Certificate/BorntoDev/02.png', description: 'Notion Database for Everyone', completed: 'May 2025' },
      { url: 'Image/Certificate/BorntoDev/03.png', description: 'GitHub for Developer',         completed: 'May 2025' },
    ],
  },

  CBTU: {
    title: 'CBTU Certificates',
    images: [
      { url: 'Image/Certificate/CBTU/01.png', description: 'AI for All',                completed: 'Sep 2025' },
      { url: 'Image/Certificate/CBTU/02.png', description: 'Basic Prompt Engineering',  completed: 'Sep 2025' },
      { url: 'Image/Certificate/CBTU/03.png', description: 'AI Agent for ALL',          completed: 'Apr 2026' },
      { url: 'Image/Certificate/CBTU/04.png', description: 'AI Agents in Action',       completed: 'Apr 2026' },
    ],
  },

  Google: {
    title: 'Google Certificates',
    images: [
      { url: 'Image/Certificate/Google/01.png', description: 'Generative AI for Educators', completed: 'May 2024' },
      { url: 'Image/Certificate/Google/02.png', description: 'Google AI in Education',      completed: 'Sep 2025' },
    ],
  },

  HackerRank: {
    title: 'HackerRank Certificates',
    images: [
      { url: 'Image/Certificate/HackerRank/01.png', description: 'SQL (Basic)',         completed: 'Oct 2022' },
      { url: 'Image/Certificate/HackerRank/02.png', description: 'SQL (Intermediate)',  completed: 'Oct 2022' },
      { url: 'Image/Certificate/HackerRank/03.png', description: 'SQL (Advanced)',      completed: 'Oct 2022' },
    ],
  },

  LinkedIn: {
    title: 'LinkedIn Certificates',
    images: [
      { url: 'Image/Certificate/LinkedIn/01.png', description: 'Learning Python',                   completed: 'Feb 2021' },
      { url: 'Image/Certificate/LinkedIn/02.png', description: 'Learning SQL Programming',          completed: 'Feb 2021' },
      { url: 'Image/Certificate/LinkedIn/03.png', description: 'Programming Foundations Databases', completed: 'Feb 2021' },
      { url: 'Image/Certificate/LinkedIn/04.png', description: 'SQL:Data Reporting and Analysis',   completed: 'Feb 2021' },
    ],
  },
  
  MOOCs: {
    title: 'MOOCs Certificates',
    images: [
      { url: 'Image/Certificate/MOOCs/Chula_01.jpg', description: 'Chula MOOC: Database Management with SQL',                  completed: 'Aug 2024' },
      { url: 'Image/Certificate/MOOCs/Chula_02.jpg', description: 'Chula MOOC: Data for Everyone',                             completed: 'Aug 2024' },
      { url: 'Image/Certificate/MOOCs/Chula_03.jpg', description: 'Chula MOOC: เขียนโค้ดคู่กับ AI เสร็จไว ไม่ตกเทรนด์',                completed: 'Oct 2024' },
      { url: 'Image/Certificate/MOOCs/Chula_04.jpg', description: 'Chula MOOC: Cloud Computing for Everyone',                  completed: 'Apr 2025' },
      { url: 'Image/Certificate/MOOCs/MU_01.png',   description: 'MU MOOC: Introduction to Data Analytics',                    completed: 'Mar 2024' },
      { url: 'Image/Certificate/MOOCs/MU_02.png',   description: 'MU MOOC: Excel',                                             completed: 'May 2024' },
      { url: 'Image/Certificate/MOOCs/Thai_01.png', description: 'Thai MOOC: Introduction to Data Science',                    completed: 'Feb 2021' },
      { url: 'Image/Certificate/MOOCs/Thai_02.png', description: 'Thai MOOC: Data Driven Decision Making',                     completed: 'Sep 2023' },
      { url: 'Image/Certificate/MOOCs/Thai_03.png', description: 'Thai MOOC: Python for Data Analysis & Visualization Part 1', completed: 'Sep 2023' },
      { url: 'Image/Certificate/MOOCs/Thai_04.png', description: 'Thai MOOC: Python for Data Analysis & Visualization Part 2', completed: 'Sep 2023' },
      { url: 'Image/Certificate/MOOCs/Thai_05.png', description: 'Thai MOOC: Data Analysis for Business Management',           completed: 'Dec 2023' },
      { url: 'Image/Certificate/MOOCs/Thai_06.png', description: 'Thai MOOC: Big Data Analysis',                               completed: 'Dec 2023' },
      { url: 'Image/Certificate/MOOCs/Thai_07.png', description: 'Thai MOOC: Data Science',                                    completed: 'Mar 2025' },
      { url: 'Image/Certificate/MOOCs/Thai_08.png', description: 'Thai MOOC: Python Programming for Data Science',             completed: 'Mar 2025' },
    ],
  },

  DIGI: {
    title: 'DIGI Certificates',
    images: [
      { url: 'Image/Certificate/DIGI/01.png', description: 'Data Storytelling 101 เล่าเรื่องอย่างไรให้น่าสนใจ',  completed: 'Oct 2023' },
      { url: 'Image/Certificate/DIGI/02.png', description: 'Introduction to Power BI',                    completed: 'Oct 2023' },
      { url: 'Image/Certificate/DIGI/03.png', description: 'Basic Python',                                completed: 'Oct 2023' },
      { url: 'Image/Certificate/DIGI/04.png', description: 'Basic Tableau',                               completed: 'Oct 2023' },
      { url: 'Image/Certificate/DIGI/05.png', description: 'การปรับปรุงข้อมูลให้เป็น Machine Readable',         completed: 'Oct 2023' },
    ],
  },

  SAMSUNG: {
    title: 'SAMSUNG Certificates',
    images: [
      { url: 'Image/Certificate/SAMSUNG/01.png', description: 'Introduction to Artificial Intelligence in the Workplace', completed: 'Jul 2024' },
      { url: 'Image/Certificate/SAMSUNG/02.png', description: 'Introduction to Programming with Python',                  completed: 'Jul 2024' },
    ],
  }
};

// ── Gallery State ─────────────────────────────────────────────
let currentGallery   = null;
let currentImageIndex = 0;

// cached DOM references (populated on first use)
let galleryEls = null;

function getGalleryEls() {
  if (!galleryEls) {
    galleryEls = {
      modal:       $('#galleryModal'),
      image:       $('#galleryImage'),
      title:       $('#galleryTitle'),
      description: $('#galleryDescription'),
      completed:   $('#completed'),
      currentNum:  $('#currentImageNum'),
      totalNum:    $('#totalImages'),
      thumbs:      $('#thumbnailContainer'),
    };
  }
  return galleryEls;
}

function openGalleryModal(galleryId) {
  currentGallery    = galleryData[galleryId];
  currentImageIndex = 0;
  if (!currentGallery) return;

  const els = getGalleryEls();

  // Build thumbnails (DocumentFragment for performance)
  const frag = document.createDocumentFragment();
  currentGallery.images.forEach((img, idx) => {
    const thumb    = document.createElement('img');
    thumb.src      = img.url;
    thumb.alt      = img.description;
    thumb.loading  = 'lazy';
    thumb.className = 'thumbnail' + (idx === 0 ? ' active' : '');
    thumb.addEventListener('click', () => showImage(idx));
    frag.appendChild(thumb);
  });
  els.thumbs.innerHTML = '';
  els.thumbs.appendChild(frag);

  els.totalNum.textContent = currentGallery.images.length;
  updateGalleryDisplay();
  els.modal.style.display = 'block';
  lockScroll();
}

function updateGalleryDisplay() {
  const { image, title, description, completed, currentNum, thumbs } = getGalleryEls();
  const img = currentGallery.images[currentImageIndex];

  image.src          = img.url;
  title.textContent  = currentGallery.title;
  description.textContent = img.description;
  completed.textContent   = img.completed;
  currentNum.textContent  = currentImageIndex + 1;

  $$('.thumbnail', thumbs).forEach((t, i) =>
    t.classList.toggle('active', i === currentImageIndex)
  );
}

function changeImage(dir) {
  const total       = currentGallery.images.length;
  currentImageIndex = (currentImageIndex + dir + total) % total;
  updateGalleryDisplay();
}

function showImage(index) {
  currentImageIndex = index;
  updateGalleryDisplay();
}

function closeGalleryModal() {
  getGalleryEls().modal.style.display = 'none';
  unlockScroll();
}

// ── Global Click/Key Handlers ─────────────────────────────────
document.addEventListener('click', e => {
  // close experience modal on backdrop click
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
    unlockScroll();
  }
  // close gallery modal on backdrop click
  if (e.target === getGalleryEls().modal) closeGalleryModal();
});

document.addEventListener('keydown', e => {
  const galleryVisible = getGalleryEls().modal.style.display === 'block';

  if (e.key === 'Escape') {
    if (galleryVisible) {
      closeGalleryModal();
      return;
    }
    // close any open experience modal
    $$('.modal').forEach(m => {
      if (m.style.display === 'block') { m.style.display = 'none'; unlockScroll(); }
    });
    return;
  }

  if (galleryVisible) {
    if (e.key === 'ArrowLeft')  changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
  }
});
