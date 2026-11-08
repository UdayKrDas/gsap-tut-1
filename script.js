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