$(document).ready(function () {
    const sub_cocktail = new Swiper(".sub_cocktail", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 1000,
        breakpoints: {
            200: { // min-width 500px 이상에서 보이는 개수
                slidesPerView: 4,
                spaceBetween: 10,
            },
            500: { // min-width 500px 이상에서 보이는 개수
                slidesPerView: 5,
                spaceBetween: 10,
            },
            768: { // 768px 이상에서 보이는 개수
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1200: { // 1200px 이상에서 보이는 개수
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });

});