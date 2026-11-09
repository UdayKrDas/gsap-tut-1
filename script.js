const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function videoconAnimation() {
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