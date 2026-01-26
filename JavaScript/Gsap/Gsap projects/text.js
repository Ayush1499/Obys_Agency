gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
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



var allh1 = document.querySelectorAll("h1");
allh1.forEach(function(elem){
    var clutter = ""
    var texth1 = elem.textContent
    var splitedtext = texth1.split("")
    splitedtext.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML = clutter
})
// for 1 element only
// var texth1 = document.querySelector("#firsth1").textContent
// var splitedtext = texth1.split("")
// var clutter = ""
// splitedtext.forEach(function(elem){
//     clutter += `<span>${elem}</span>`
// })
// document.querySelector("#firsth1").innerHTML=clutter
// console.log(clutter);

gsap.to("#page2 h1 span",{
    color: " #F7F7EE",
    opacity:1,
    stagger:0.2,
    // stagger: { amount: 1, from: "center" },
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 #firsth1",
        markers:true,
        start:"top 80%",
        end:"top 10%",
        scrub:2,
    }
})

