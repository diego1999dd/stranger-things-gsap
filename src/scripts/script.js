// SCROLL SUAVE -> ANIMAÇÕES COM SCROLLTRIGGER E SPLITTEXT
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)


ScrollSmoother.create({
    smooth: 1.5,
    effects: true
})

gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1
})

gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1
})

gsap.from(".card", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: .3,
    scrollTrigger: {
        trigger: ".cards",
        markers: true,
        start: "0% 80%",
        end: "100% 70%",
        scrub: true
    }
})