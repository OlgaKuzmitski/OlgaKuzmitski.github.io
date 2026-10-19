// Mobile menu toggle
var toggle = document.querySelector(".menu-toggle");
var nav = document.querySelector(".nav");
toggle.addEventListener("click", function () {
  var open = nav.classList.toggle("open");
  toggle.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
});

// Header gets a shadow once you scroll
var header = document.querySelector(".site-header");
function onScroll() { header.classList.toggle("scrolled", window.scrollY > 10); }
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Fade elements in as they scroll into view
var items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
} else {
  items.forEach(function (el) { el.classList.add("in"); });
}
