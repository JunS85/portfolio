$(document).ready(function () {
    const $text = document.querySelector(".typing .text");
    // 글자 모음
    const letters = [
        "한글쓴이의 이야기", "10월 9일 시작"
    ];
    // 글자 입력 속도
    const speed = 200;
    let i = 0;
    // 타이핑 효과
    const typing = async () => {
        const letter = letters[i].split("");
        while (letter.length) {
            await wait(speed);
            $text.innerHTML += letter.shift();
        }
        // 잠시 대기
        await wait(800);
        // 지우는 효과
        remove();
    }
    // 글자 지우는 효과
    const remove = async () => {
        const letter = letters[i].split("");
        while (letter.length) {
            await wait(speed);

            letter.pop();
            $text.innerHTML = letter.join("");
        }
        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        i = !letters[i + 1] ? 0 : i + 1;
        typing();
    }
    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
    }
    // 초기 실행
    setTimeout(typing, 1500);

    /* 마우스 커서 */
    document.addEventListener("mousemove", function (event) {
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        const main = document.querySelector("#main");
        const radialGradient = document.querySelector(".cursor");
        const gradientSize = radialGradient.offsetWidth;

        let newX = mouseX - gradientSize / 2;
        const newY = mouseY - gradientSize / 2;

        const mainWidth = main.offsetWidth;
        const mainHeight = main.offsetHeight;

        if (newX < 0) {
            newX = 0;
        } else if (newX + gradientSize > mainWidth) {
            newX = mainWidth - gradientSize;
        }

        if (newY < 0) {
            newY = 0;
        } else if (newY + gradientSize > mainHeight) {
            newY = mainHeight - gradientSize;
        }

        radialGradient.style.left = newX + "px";
        radialGradient.style.top = newY + "px";
    });

    const map = new Swiper(".zep_map", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
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
                spaceBetween: 200,
                speed: 2000,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 60,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });





    /* 스크롤 트리거 */
    const zep = gsap.timeline();
    zep.from(".zep_txt1", 6, { opacity: 0 })
    zep.to(".zep_txt1", 4, { y: -50, opacity: 0 })

    zep.from(".zep_txt2", 6, { opacity: 0 })
    zep.to(".zep_txt2", 4, { y: -50, opacity: 0 })


    zep.from(".zep_txt3", 6, { opacity: 0 })
    zep.to(".zep_txt3", 4, { y: -50, opacity: 0 })

    zep.from(".zep_txt4", 4, { opacity: 0 })
    zep.to(".zep_txt4", 4, { y: 0 })

    zep.from(".zep_txt5", 2, { scale: 0 })
    zep.to(".zep_txt5", 2, { y: 150, scale: 1 })

    zep.from(".zep_txt6", 2, { scale: 0 })
    zep.to(".zep_txt6", 2, { y: 130, scale: 1 })

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
        animation: zep,
        trigger: "#zep",
        start: "top top",
        end: "+=6000",
        pin: true,
        scrub: 1,
        pinSpacing: true,
    });


});
