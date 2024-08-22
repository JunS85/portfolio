$(document).ready(function () {
    const review = new Swiper(".review_con", {
        /*  autoplay: {
             delay: 3000,
             disableOnInteraction: false,
         }, */
        centeredSlides: true,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 100,
        speed: 4000,
        navigation: {
            nextEl: ".swiper-button-prev",
            prevEl: ".swiper-button-next",
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 150,
                speed: 2000,
            },
            769: {
                slidesPerView: 2.5,
                spaceBetween: 60,
            },
            1200: {
                slidesPerView: 3,
            },

        },
    });

});