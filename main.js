// main.js
 const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // يقفل المنيو لما تدوس على أي لينك
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial-item");

function showSlide(index) {
  testimonials.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) {
      item.classList.add("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showSlide(currentIndex);
}

// Auto slide every 5s
setInterval(nextSlide, 5000);