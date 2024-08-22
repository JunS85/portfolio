$(document).ready(function () {
    /*  $(".program_con li:nth-child(n+2)").hide();
     $(".program_tab li").click(function () {
         let idx = $(this).index();
         $(".program_con li").eq(idx).fadeIn().siblings().hide();
     }); */

    $(".program_con li").hide();
    $(".program_con li").first().fadeIn();
    $(".program_tab li").first().addClass("on");
    let num = 0;
    const program = setInterval(() => {
        if (num < 4) {
            num++;
        } else {
            num = 0;
        }
        $(".program_con li").fadeOut(0);
        $(".program_con li").eq(num).fadeIn(2000);
        $(".program_tab li").eq(num).addClass("on").siblings().removeClass("on");
    }, 4000);


    $(".program_tab li").click(function () {
        clearInterval(program);
        let idx = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".program_con li").eq(idx).fadeIn().siblings().hide();
    });
});