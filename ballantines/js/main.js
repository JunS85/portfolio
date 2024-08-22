$(document).ready(function () {
    //whisky slide
    const whisky = new Swiper(".whisky", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 4.5,
        spaceBetween: 30,
        speed: 1000,
        scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 200,
            draggable: true,
            hide: true,
        },
        breakpoints: {
            200: { // 200px 이상에서 보이는 개수
                slidesPerView: 3.5,
                spaceBetween: 10,
                centeredSlides: true,
            },
            500: { // 500px 이상에서 보이는 개수
                slidesPerView: 5,
                spaceBetween: 10,
                centeredSlides: true,
            },
            768: { // 768px 이상에서 보이는 개수
                slidesPerView: 3.5,
                spaceBetween: 10,
            },
            1200: { // 1200px 이상에서 보이는 개수
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });

    //cocktail
    $(".cocktail_left li").hide();
    $(".cocktail_left li").first().fadeIn();
    $(".cocktail_right li").first().addClass("active");
    let num = 0;
    const cocktail = setInterval(() => {
        if (num < 6) {
            num++;
        } else {
            num = 0;
        }
        $(".cocktail_left li").fadeOut(0);
        $(".cocktail_left li").eq(num).fadeIn(600);
        $(".cocktail_right li").eq(num).addClass("active").siblings().removeClass("active");
    }, 3000);


    $(".cocktail_right li").click(function () {
        clearInterval(cocktail);
        let idx = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".cocktail_left li").eq(idx).fadeIn().siblings().hide();
    });

    //news
    const news = new Swiper(".news", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        loop: true,
        slidesPerView: 5,
        spaceBetween: 50,
        speed: 2500,
        navigation: {
            nextEl: ".news-next", //다음버튼
            prevEl: ".news-prev", //이전버튼
        },
        breakpoints: {
            200: { // min-width 200px 이상에서 보이는 개수
                slidesPerView: 3,
                spaceBetween: 10,
            },
            500: { // min-width 500px 이상에서 보이는 개수
                slidesPerView: 3,
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
    const news_txt = new Swiper(".news_txt", {
        centeredSlides: true,
        loop: true,
        slidesPerView: 5,
        speed: 2500,
        breakpoints: {
            200: { // min-width 200px 이상에서 보이는 개수
                slidesPerView: 3,
                spaceBetween: 10,
            },
            500: { // min-width 500px 이상에서 보이는 개수
                slidesPerView: 3,
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
    news.controller.control = news_txt;
    news_txt.controller.control = news;


    //blog

    if (matchMedia("screen and (min-width: 1200px)").matches) {
        $(".Down").hide();
        $("#blog ul li").mouseenter(function () {
            $(this).find(".Down").stop().slideDown()
        });
        $("#blog ul li").mouseleave(function () {
            $(this).find(".Down").stop().slideUp()
        });
    }
});