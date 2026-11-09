// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function locomotiveAnimations(){
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

}
locomotiveAnimations()


function navbarAnimation(){
    gsap.to("#nav-part-1 #logo", {
    transform: "translateY(-60%)",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: 2,
    }
})

gsap.to("#nav-part-2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: 2,
    }
})

gsap.to("#nav", {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: "80%",
    transform: "translate(10vw, 2vw)",
    left: "5vw",
    padding: "5px, 10px",
    backdropFilter: "blur(5px)", 
    borderRadius: "15px",
    border: "1px solid white",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: 2,
    }
})
}
navbarAnimation()


function videoconAnimation(){
    let vidcon = document.querySelector("#video-container")
let playbtn = document.querySelector('#play')

vidcon.addEventListener("mouseenter", function(){
    gsap.to(playbtn, {
        scale: 1,
        opacity: 1
    })
})

vidcon.addEventListener("mouseleave", function(){
    gsap.to(playbtn, {
        scale: 0,
        opacity: 0
    })
})

vidcon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn, {
        left: dets.x -30,
        top: dets.y -20
    })
})
}
videoconAnimation()


function loadinganimation(){
    gsap.from("#page1 h1", {
    y:100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.3
})

gsap.from("#page1 #video-container", {
    scale: 0.8,
    opacity: 0,
    delay: 1.5,
    duration: 0.5,
})
}
loadinganimation()


function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor", {
        left: dets.x,
        top: dets.y
    })
})

document.querySelectorAll(".child").forEach(function(e){
    e.addEventListener("mouseenter", function(){
    gsap.to("#cursor", {
        transform:' translate(-50%, -50%) scale(1)'
        
    })
})

    e.addEventListener("mouseleave", function(){
    gsap.to("#cursor", {
        transform:' translate(-50%, -50%) scale(0)'
        
    })
})


})
}
cursorAnimation()


