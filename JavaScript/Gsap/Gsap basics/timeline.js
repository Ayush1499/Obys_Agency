var tl = gsap.timeline();
tl.to("#Box1",{
    x:1000,
    rotate:360,
    backgroundColor:"green",
    duration:3,
    delay:1,
    scale:0.8,
    // repeat:-1,
    yoyo:true,ease: "back.out(1.7)",
})
tl.to("#Box2",{
    x:1000,
    rotate:360,
    backgroundColor:"red",
    duration:3,
    scale:0.8,
    // repeat:-1,
})
tl.to("#Box3",{
    x:1000,
    rotate:360,
    backgroundColor:"blue",
    duration:3,
    scale:0.8,
    // repeat:-1,
})