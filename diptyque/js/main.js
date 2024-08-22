$(document).ready(function () {
    /* depth2 */
    $(".depth2_bg,.depth2").hide();
    $(".gnb > li").mouseenter(function () {
        $(".depth2_bg").stop().fadeIn();
        $(this).find(".depth2").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function () {
        $(".depth2_bg").stop().fadeOut();
        $(this).find(".depth2").stop().fadeOut();
    });
    /* search */
    $(".search,.search_close").hide();
    $(".btn_search").click(function () {
        $(".search_close").show();
        $(".search").stop().fadeIn();
    });
    $(".search_close").click(function () {
        $(".search_close").hide();
        $("btn_search").show();
        $(".search").stop().fadeOut();
    });


    /* best */
    $(".best_02,.best_03,.best_04,.line02,.line03,.line04").hide();
    $(".best_btn01").click(function () {
        $(".best_01,.line01").fadeIn();
        $(".best_02,.best_03,.best_04,.line02,.line03,.line04").hide();
    });
    $(".best_btn02").click(function () {
        $(".best_02,.line02").fadeIn();
        $(".best_01,.best_03,.best_04,.line01,.line03,.line04").hide();
    });
    $(".best_btn03").click(function () {
        $(".best_03,.line03").fadeIn();
        $(".best_01,.best_02,.best_04,.line01,.line02,.line04").hide();
    });
    $(".best_btn04").click(function () {
        $(".best_04,.line04").fadeIn();
        $(".best_01,.best_02,.best_03,.line01,.line02,.line03").hide();
    });

    /* best_slick-slide */
    $(".slick_best01,.slick_best02,.slick_best03,.slick_best04").slick({
        speed: 2000,
        centerMode: true, //센터모드
        slidesToShow: 5, //슬라이드 보이는 수
        slidesToScroll: 1, //스크롤시 스크롤 수
        infinite: true, //무한루프
        variableWidth: true, //슬라이드 이미지 크기
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false, //이전,다음 버튼 보이는 여부
        pauseOnFocus: false, //클릭시 멈춤
    });


    /* prd */
    const prd = new Swiper(".prd", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
    });

    /* aroma */
    $(".aroma_img").hide();
    $(".aroma_list > li").mouseenter(function () {
        $(this).find(".aroma_img").stop().fadeIn();
    });
    $(".aroma_list > li").mouseleave(function () {
        $(this).find(".aroma_img").stop().fadeOut();
    });

    /* gift */
    $(".down_txt").hide();
    $(".down").mouseenter(function () {
        $(this).find(".down_txt").stop().slideDown();
    });
    $(".down").mouseleave(function () {
        $(this).find(".down_txt").stop().slideUp();
    });

});/* ready */