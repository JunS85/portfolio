$(document).ready(function () {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)


    /* 가로 스크롤 */
    const horizontal = document.querySelector("#portfolio");
    const sections = gsap.utils.toArray("#portfolio > section");

    function init() {

        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.matchMedia({
            "(min-width: 768px)": function () {
                gsap.to(sections, {
                    xPercent: -130 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#portfolio",
                        start: "top top",
                        end: "+=8000",
                        pin: true,
                        scrub: 2,
                        invalidateOnRefresh: true,
                        anticipatePin: 1,
                        pinSpacing: true,
                    }
                });
            },
            "(max-width: 767px)": function () {
                gsap.to(sections, {
                    xPercent: -140 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#portfolio",
                        start: "top top",
                        end: "+=4000",
                        pin: true,
                        scrub: 2,
                        invalidateOnRefresh: true,
                        anticipatePin: 1,
                        pinSpacing: true,
                    }
                });
            }
        });

        window.addEventListener("resize", ScrollTrigger.update);
    }

    init();

});