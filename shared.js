// =======================
// SECTION NAVIGATION
// =======================
function show(id, btn) {
  const sections = document.querySelectorAll('.sec');
  const buttons = document.querySelectorAll('.menu-btn');

  sections.forEach(s => s.classList.remove('on'));
  buttons.forEach(b => b.classList.remove('on'));

  const section = document.getElementById(id);
  if (!section) return;

  section.classList.add('on');
  if (btn) btn.classList.add('on');

  section.scrollIntoView({ behavior: 'smooth' });
}


// =======================
// PROJECT CARD TOGGLE
// =======================
function toggleCard(id) {
  const card = document.getElementById(id);
  if (!card) return;

  const isOpening = !card.classList.contains('open');
  card.classList.toggle('open');

  if (isOpening) {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }, 300);
  }
}


// =======================
// PAGE LOADER / FADE-IN
// =======================
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.style.visibility = 'visible';
  }, 1000);
});