document.addEventListener("DOMContentLoaded", function (event) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          return;
        }

        entry.target.classList.remove("animate");
      });
    },
    { rootMargin: "0px 0px 80px 0px" }
  );

  const targets = document.querySelectorAll(".fadeInUp");

  targets.forEach((element) => observer.observe(element));
});
