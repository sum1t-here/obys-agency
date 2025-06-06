var tl = gsap.timeline();

tl.from(".line h1", {
    y:150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5
})

tl.from("#number h5",{
    onStart: function(){
        var timer = document.querySelector('#number h5');
        var grow = 0;

        setInterval(function(){
            if(grow < 100 ) {
                timer.innerHTML = grow++;
            }else {
                timer.innerHTML = grow;
            }
        
        }, 30)
    }
})

tl.to(".line h2", {
    animationName: "anime",
    opacity: 1
})

tl.to("#loader", {
    opacity: 0,
    duration: 0.3,
    delay: 4
})

tl.from("#page1",{
    delay: 0.2,
    y: 1200,
    ease: Power4
})

tl.to("#loader", {
    display: "none"
})