const options = {
  root: null,
  threshold: 0,
  rootMargin: '0px',
};

const sections = document.querySelectorAll('section');
const cards = document.querySelector('.cards');
const section = document.querySelector('.eight');

const IO = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      cards.classList.add('zoomOut');
    }
  });
}, options);

// sections.forEach((section) => {
//   IO.observe(section);
// });

// cards.forEach((card) => {
//   IO.observe(card);
// });

IO.observe(section);
