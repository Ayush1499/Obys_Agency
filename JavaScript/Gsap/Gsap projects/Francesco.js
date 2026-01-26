var tl = gsap.timeline();
tl.from("#nav h3",{
    y:-50,
    delay:0.3,
    opacity:0,
    duration:0.7,
    stagger:0.3,
})
tl.from("section h1",{
    x:1000,
    opacity:0,
    duration:0.9,
    stagger:0.3,
})
tl.from("section img",{
    x:100,
    opacity:0,
    rotate:45,
    duration:1.3,
    stagger:0.3,
})
tl.from("footer h3",{
    y:50,
    opacity:0,
    duration:0.9,
    stagger:0.3,
})
