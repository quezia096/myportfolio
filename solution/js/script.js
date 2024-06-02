const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('#header .navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});


window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  changeHeaderBackground();
});


function changeHeaderBackground() {
  const header = document.getElementById('header');
  if (header) {
    header.style.background = (window.scrollY >= 200) ? '#191919' : 'transparent';
  }
}



var swiper = new Swiper(".projects-slider", {
    spaceBetween: 15,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});
