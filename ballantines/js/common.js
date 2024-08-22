$(document).ready(function () {
    //메뉴
    $(".depth2,.depth2_bg").hide();
    $(".gnb > li").hover(function () {
        $('.depth2,.depth2_bg').stop().fadeToggle();
    });

    //상단메뉴 스크롤 이벤트

    let lastScrollTop = 0;
    $(window).scroll(function (event) {
        const a = $(this).scrollTop();
        if ((a > lastScrollTop) && (lastScrollTop > 0)) {
            $("#header").addClass("on");
        } else {
            $("#header").removeClass("on");
        };
        lastScrollTop = a;
    });

    //m_gnb
    $(".m_depth2").hide();
    $(".m_gnb > li").click(function () {
        $(".m_depth2").stop().slideUp();
        $(this).find(".m_depth2").stop().slideDown();
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".m_gnb_wrap").hide();
    $(".ham").click(function () {
        $(".m_gnb_wrap").fadeIn();
    });

    $(".m_gnb_close").click(function () {
        $(".m_gnb_wrap").fadeOut();
    });

    //검색창
    $(".search").hide();
    $(".search_btn").click(function () {
        $(".search").fadeIn();
    });
    $(".search_close").click(function () {
        $(".search").fadeOut();
    });

});