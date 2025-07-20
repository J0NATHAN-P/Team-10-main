const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});


 document.addEventListener('click', function(event) {
    const menu = document.querySelector('.mobile-menu');
    const toggle = document.querySelector('.menu-toggle');
    const isClickInside = menu.contains(event.target) || toggle.contains(event.target);

    if (!isClickInside && menu.classList.contains('active')) {
      menu.classList.remove('active');
    }
  });