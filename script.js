// Mobile menu toggle + "More" dropdown on tap
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav").classList.toggle("open");
});
document.querySelector(".more > button").addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
});
