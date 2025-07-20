document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  // Eventos
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });
  }

  showSlide(currentIndex);
  startAutoSlide();
});



