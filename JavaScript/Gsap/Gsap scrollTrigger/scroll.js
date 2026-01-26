gsap.from("#page1 #circle",{
    scale:0,
    rotate:360,
    scrollTrigger:{
        trigger:"#page1 #circle",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:3,
        pin:true
    },
})
gsap.from("#page2 #circle",{
    scale:0,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:3,
        pin:true
    },
})
gsap.from("#page3 #circle",{
    scale:0,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3 #circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:3,
        pin:true
    },
    ease:"back.out"
})