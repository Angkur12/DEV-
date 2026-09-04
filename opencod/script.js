// StayEase - Hotel Management Landing JS

// 1. Mobile nav
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// 2. Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// 3. Set min dates for booking
const checkin = document.getElementById('checkin');
const checkout = document.getElementById('checkout');
const today = new Date().toISOString().split('T')[0];
checkin.min = today;
checkout.min = today;
checkin.value = today;

checkin.addEventListener('change', () => {
  checkout.min = checkin.value;
  if (checkout.value <= checkin.value) checkout.value = checkin.value;
});

// 4. Booking form
const bookingForm = document.getElementById('bookingForm');
const formMsg = document.getElementById('formMsg');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const room = document.getElementById('roomType').value;
  const guests = document.getElementById('guests').value;

  if (!checkin.value || !checkout.value) {
    showMsg(formMsg, 'Please select check-in and check-out dates.', 'error');
    return;
  }
  if (checkout.value <= checkin.value) {
    showMsg(formMsg, 'Check-out must be after check-in.', 'error');
    return;
  }

  const nights = Math.ceil(
    (new Date(checkout.value) - new Date(checkin.value)) / (1000 * 60 * 60 * 24)
  );

  showMsg(
    formMsg,
    `✓ ${room} available for ${nights} night(s), ${guests}! Proceed to Book Your Stay below.`,
    'success'
  );
});

// 5. Room filter
const filterBtns = document.querySelectorAll('.filter-btn');
const roomCards = document.querySelectorAll('.room-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    roomCards.forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

// 6. Quick book buttons -> scroll to contact + prefill
const contactForm = document.getElementById('contactForm');
const messageBox = document.getElementById('message');
document.querySelectorAll('.book-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const room = btn.dataset.room;
    messageBox.value = `I would like to book: ${room} from ${checkin.value || '...'} to ${checkout.value || '...'}.`;
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});

// 7. Contact form
const contactMsg = document.getElementById('contactMsg');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (name.length < 2) {
    showMsg(contactMsg, 'Please enter your full name.', 'error');
    return;
  }
  if (!email.includes('@')) {
    showMsg(contactMsg, 'Please enter a valid email.', 'error');
    return;
  }
  showMsg(contactMsg, `Thank you, ${name}! Your booking request was received. Confirmation sent to ${email}.`, 'success');
  contactForm.reset();
});

// Helper
function showMsg(el, text, type) {
  el.textContent = text;
  el.className = 'form-msg ' + type;
}

// 8. Testimonial slider
const reviews = [
  { text: '"Amazing stay! Check-in was instant and the room was spotless."', author: '— Sarah M.' },
  { text: '"Best hotel dashboard I have seen. Billing and housekeeping were flawless."', author: '— James K., Business Guest' },
  { text: '"Booked family room in 2 minutes. Kids loved the pool slot system!"', author: '— Priya S.' },
];
let reviewIndex = 0;
const reviewText = document.getElementById('reviewText');
const reviewAuthor = document.getElementById('reviewAuthor');

function showReview(i) {
  reviewIndex = (i + reviews.length) % reviews.length;
  reviewText.textContent = reviews[reviewIndex].text;
  reviewAuthor.textContent = reviews[reviewIndex].author;
}
document.getElementById('nextReview').addEventListener('click', () => showReview(reviewIndex + 1));
document.getElementById('prevReview').addEventListener('click', () => showReview(reviewIndex - 1));
setInterval(() => showReview(reviewIndex + 1), 6000);

// 9. Animated counters + occupancy bar on scroll
const counters = document.querySelectorAll('[data-count]');
let countersDone = false;

function animateCounters() {
  if (countersDone) return;
  countersDone = true;
  counters.forEach(el => {
    const target = +el.dataset.count;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current;
    }, 30);
  });
  // Animate occupancy bar to 78%
  const bar = document.getElementById('occupancyBar');
  if (bar) {
    setTimeout(() => { bar.style.width = '78%'; bar.textContent = '78%'; }, 200);
  }
}

// 10. Scroll reveal
const revealEls = document.querySelectorAll('.room-card, .service-card, .dashboard-mock, .testimonial');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      animateCounters();
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
// Trigger counters immediately for hero stats
animateCounters();
