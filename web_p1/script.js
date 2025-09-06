
const swiper = new Swiper ('.slider-wrapper', {
  
  loop: true,
  grabCursor:true,
  spaceBetween:35,


  // If we need pagination
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:
  {
    0: {
        slidesPerView:1
    },

    768: {
        slidesPerView:2

    },

    1024: {
        slidesPerView:3

    }



  }


} );