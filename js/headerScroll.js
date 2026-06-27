document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("mainHeader");
  const logoText = document.getElementById("logoText");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      // Saat scroll ke bawah
      header.classList.remove("bg-transparent");
      header.classList.add("bg-gray-800", "shadow-lg");
      logoText.classList.remove("text-white");
      logoText.classList.add("text-blue-400");
      navLinks.forEach(link => {
        link.classList.remove("text-white");
        link.classList.add("text-blue-400");
      });
    } else {
      // Saat di hero section
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
});
