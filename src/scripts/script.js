// SCROLL SUAVE -> ANIMAÇÕES COM SCROLLTRIGGER E SPLITTEXT
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)


ScrollSmoother.create({
    smooth: 1.5,
    effects: true
})

function animarPagina() {
    // ANIMAÇÕES DE ENTRADA NO EIXO Y, A IMAGEM DOS PERSONAGENS SUBINDO, POR ISSO O USO DO Y COM NÚMEROS POSITIVOS PARA SUBIR!
    gsap.from("picture:nth-child(2)", {
        y: 60,
        duration: 1
    })

    // ANIMAÇÕES DE ENTRADA NO EIXO Y, A SESSÃO COM A IMAGEM DO MONSTRO DESCENDO, POR ISSO O USO DO Y COM NÚMEROS NEGATIVOS, SE FOSSE POSITIVO ELE SUBIRIA!
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
            start: "0% 80%",
            end: "100% 70%",
            scrub: true
        }
    })

    gsap.from(".secaoObrigado ul li", {
        opacity: 0,
        x: 40,
        filter: "blur(10px)",
        stagger: .1,
        scrollTrigger: {
            trigger: ".secaoObrigado ul",
            start: "0% 80%",
            end: "100% 50%",
            scrub: true
        }
    })

    // ANIMAÇÃO DE ENTRADA DO FOOTER.

    gsap.from("footer", {
        y: "-30%",
        immediateRender: false,
        scrollTrigger: {
            trigger: "footer",
            invalidateOnRefresh: true,
            end: "100% 100%",
            scrub: true
        }
    })
}

// LETRAS SURGINDO.

const grupoTextoSplit = document.querySelectorAll(".textoSplit");

grupoTextoSplit.forEach((textoUnicoSplit) => {
    const split = SplitText.create(textoUnicoSplit, {
        type: "lines, words, chars",
        mask: "lines",
    });

    gsap.from(split.chars, {
        y: 40,
        opacity: 0,
        duration: 0.3,
        stagger: 0.03,
        scrollTrigger: {
            trigger: textoUnicoSplit,
            markes: true
        }
    })

})

// PRELOADER

const tl = gsap.timeline({
    onComplete() {
        animarPagina()
        gsap.to("#preloader", {
            opacity: 0,
            display: "none",
        });
    },
});

tl.to("#preloader path", {
    duration: 1,
    strokeDashoffset: 0,
});

tl.to("#preloader path", {
    fill: "rgb(168, 19, 19)",
    duration: .5,
    strokeDashoffset: 0,
});