  window.addEventListener('scroll', function () {
    document.body.classList.toggle('scrolled', window.scrollY > 10);
  });

  document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach(el => el.classList.add("show"));
});
