// Create the observer like the examples above
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-animation');
      return;
    }

    entry.target.classList.remove('section-animation');
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const squares = document.querySelectorAll('.animated-section');

// Loop over the elements and add each one to the observer
squares.forEach((element) => observer.observe(element));