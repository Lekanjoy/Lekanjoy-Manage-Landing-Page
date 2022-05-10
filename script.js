const swiper = new Swiper(".swiper", {
    autoplay: {
        delay: 3000,
        diasbleOnInteraction: false,
    },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: 'true',
  },

  

  
});

let hamburgerIcon = document.getElementById("hamburger-icon");
let navLinks = document.getElementById('nav-links');

hamburgerIcon.addEventListener('click',() =>{
  navLinks.classList.toggle('active');
});

console.log(hamburgerIcon);