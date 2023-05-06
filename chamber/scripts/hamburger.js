function toggleMenu() {
  var navLinks = document.getElementById("nav-links");
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', function() {
    toggleMenu();
  });
});
