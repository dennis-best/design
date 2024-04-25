document.addEventListener("DOMContentLoaded", function (event) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-animation");
        return;
      }

      entry.target.classList.remove("section-animation");
    });
  });

  const squares = document.querySelectorAll(".animated-section");

  squares.forEach((element) => observer.observe(element));
});
