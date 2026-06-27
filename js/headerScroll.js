document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("mainHeader");
  const logoText = document.getElementById("logoText");
  const navLinks = document.querySelectorAll(".nav-link");
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  // Scroll effect untuk header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.remove("bg-transparent");
      header.classList.add("bg-gray-800", "shadow-lg");

      logoText.classList.remove("text-white");
      logoText.classList.add("text-blue-400");

      navLinks.forEach(link => {
        link.classList.remove("text-white");
        link.classList.add("text-blue-400");
      });
    } else {
      header.classList.add("bg-transparent");
      header.classList.remove("bg-gray-800", "shadow-lg");

      logoText.classList.add("text-white");
      logoText.classList.remove("text-blue-400");

      navLinks.forEach(link => {
        link.classList.add("text-white");
        link.classList.remove("text-blue-400");
      });
    }
  });

  // Toggle hamburger menu
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });
  }
});
