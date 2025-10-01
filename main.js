// main.js
document.addEventListener("DOMContentLoaded", () => {

  // ======= Menu Toggle =======
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // ======= Testimonials Slider =======
  const testimonials = document.querySelectorAll(".testimonial-item");
  const nextBtn = document.querySelector(".nav-btn.right");
  const prevBtn = document.querySelector(".nav-btn.left");
  let currentIndex = 0;

  function showSlide(index) {
    testimonials.forEach((item, i) => {
      item.classList.toggle("active", i === index);
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

  // ربط الزرار بالدوال
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);

  // عرض أول slide عند التحميل
  showSlide(currentIndex);

  // 🌟 مهم: إذا كنت تستخدم onclick في HTML، نعرف الدوال عالمياً
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

});