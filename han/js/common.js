$(document).ready(function () {

    /* 부드러운스크롤 */
    const lenis = new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    /* 상단헤더 */
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


    /* 모바일메뉴 */
    $(".ham").click(function () {
        $(".m_gnb_wrap").animate({
            "top": "0"
        }, 1000);
    });
    $(".m_gnb_close").click(function () {
        $(".m_gnb_wrap").animate({
            "top": "-100%"
        }, 1000);
    });


    AOS.init();
});