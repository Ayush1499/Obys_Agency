gsap.fromTo("#Box",{
    x:1000,
    y:200,
    z:1000,
    rotate:3600,
    backgroundColor:"blue",   // from ke liye i.e. start ke time pe animation
},
{   // To ke liye i.e. end ke time pe animation
    x:0,
    y:0,
    z:0,
    rotate:0,
    backgroundColor:"green",
    duration:3,
    delay:1,
    ease: "bounce.out",    // always write duration,delay and ease in To type
    repeat:-1,  // infinetly animation run karne ke liye between from and To
    yoyo:true,
})