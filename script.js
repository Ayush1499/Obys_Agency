let locoScroll
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  multiplier: 0.8, // Thoda slow but smooth
  lerp: 0.07 // Scroll smoothness
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loader() {
    var h5timer = document.querySelector("#line1-part1 h5")
    var tl = gsap.timeline()
    var create = document.querySelector("#footer h1")
    
    tl.from(".line h1", {
        y: 150,
        stagger: 0.3,
        delay: 0.3,
        duration: 1,
    })
    
    tl.from("#line1-part1, .line h2", {
        opacity: 0,
        onStart: function() {
            var grow = 0
            setInterval(function() {
                if (grow < 100) {
                    h5timer.innerHTML = grow++
                } else {
                    h5timer.innerHTML = grow
                }
            }, 35)
        }
    })

    tl.to("#loader", {
        opacity: 0,
        duration: 0.5,
        delay: 3.7,
        onComplete: function() {
            // Loader khatam hote hi display hide karein taaki mouse events block na hon
            document.querySelector("#loader").style.display = "none";

            gsap.set(".image-div", { visibility: "visible" });  // image-div ki visibility on kar di
            locoScroll.update(); // Height recalculate hogi
            ScrollTrigger.refresh();
        }
    })

    tl.from("#page1", {
        y: 1600,
        duration: 1.2,
        ease: "power4.out" // Smooth entry
    })

    // Magnet aur Cursor tabhi start karein jab sab load ho jaye
    tl.call(crsrAnimation);
    tl.from("#nav",{
        opacity:0
    })
    tl.from("#hero1 h1,#hero2 h1, #hero3 h2, #hero4 h1",{
        y: 130,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out"
    })
    tl.from("#nav-part2 h4",{
        y:50,
        opacity:0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out"
    })
    // 1. Initialize Textillate once (hidden by default)
    const $footerH1 = $("#footer h1").textillate({ 
    autoStart: false, 
    in: { effect: 'fadeIn' },
    out: { effect: 'fadeOut' }
    });

// 2. Setup the ScrollTrigger independently
    gsap.to("#footer h1", {
    scrollTrigger: {
        trigger: "#footer",
        scroller: "#main",
        start: "top 80%",
        onEnter: () => $footerH1.textillate('start') // Trigger text when scrolled into view
    }
    });

// 3. Simple Mousehover Logic
// If you want the text to change or re-animate on hover:
    create.addEventListener("mouseenter", function() {
    $footerH1.textillate('in');
    });

    create.addEventListener("mouseleave", function() {
    $footerH1.textillate('out');
    });

    // page4 h6 wave effect

}
function crsrAnimation() {
    let xSetter = gsap.quickSetter("#crsr", "left", "px");
    let ySetter = gsap.quickSetter("#crsr", "top", "px");

    window.addEventListener("mousemove", function(dets) {
        xSetter(dets.x);
        ySetter(dets.y);
    });

    Shery.makeMagnet("#nav-part2 h4", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
    });
    Shery.makeMagnet("#nav svg", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
    });

var videoContainer = document.querySelector("#video-container");
var video = document.querySelector("#video-container video");

// 1. Handle the movement separately
videoContainer.addEventListener("mousemove", function(dets) {
    gsap.to("#video-cursor", {
        left: dets.x - 500,
        y: dets.y - 300,
        duration: 0.6, // Adding a slight duration makes it feel smoother
        ease: "power2.out"
    });
});

// 2. Handle Entry (Show cursor)
videoContainer.addEventListener("mouseenter", function() {
    gsap.to("#crsr", {
        opacity: 0 // Usually, you hide the main cursor
    });
    gsap.to("#video-cursor", {
        opacity: 1,
        scale: 1
    });
});

// 3. Handle Exit (Hide cursor and reset position)
videoContainer.addEventListener("mouseleave", function() {
    gsap.to("#crsr", {
        opacity: 1 // Show main cursor again
    });
    gsap.to("#video-cursor", {
        opacity: 0,
        scale: 0,
        left: "70%",
        top: "-10%"
    });
});

var flag=0
// for video-play on click
videoContainer.addEventListener("click",function(){
    if(flag==0){
        video.play(),
    video.style.opacity = 1,
    document.querySelector("#video-cursor").innerHTML =`<i class="ri-pause-circle-line"></i>`,
    gsap.to("#video-cursor",{
        scale:0.5
    })
    flag=1
    }
    else{
        video.pause(),
        video.style.opacity = 0,
        document.querySelector("#video-cursor").innerHTML =`<i class="ri-play-circle-line"></i>`,
        gsap.to("#video-cursor",{
        scale:1
    })
    flag=0
    }
    
})
}
function sheryAnimation(){
    Shery.imageEffect(".gooey",{
        style:5,
        config:{"a":{"value":2.98,"range":[0,30]},"b":{"value":0.89,"range":[-1,1]},"zindex":{"value":"-1","range":[-9999999,9999999]},"aspect":{"value":0.7999891595294554},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true,
    })
}
function waveEffect(){
    var allh6 = document.querySelectorAll("h6");
    allh6.forEach(function(elem){
    var clutter = ""
    var texth6 = elem.textContent
    var splitedtext = texth6.split("")
    splitedtext.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
        elem.innerHTML = clutter
    })

    gsap.to("#page4-content h6 span",{
    color: "lightcyan",
    y:0,
    opacity:1,
    stagger:0.5,
    // stagger: { amount: 1, from: "center" },
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page4-content",
        start:"top 40%",
        end:"top 10%",
        scrub:1,
    }
    })
}
function underline(){
    gsap.from("#underline",{
        width: 0,
        duration:1,
        delay:0.2
    })
}
function flag(){
    document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y
    })
})
    var hero3 = document.querySelector("#hero3")
    hero3.addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1
    })
    })
    hero3.addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0
    })
    })
}


// Sirf loader call karein, wo apne aap crsrAnimation ko call kar lega
locomotiveAnimation();
loader();
crsrAnimation();
flag();
underline()
waveEffect()
sheryAnimation();