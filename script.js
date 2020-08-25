document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {duration: 1, ease:Expo.easeOut, scrollTo:{y:".projectHero" , offsetY:70}});
  });
});



gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline();

gsap.from("#section1Btn",{
  y:100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".projectDetails",
    scrub: true,
    markers: false, 
    start: "top center",
  end: "top top",
  }

});


timeline.from(".phaseTitle", 
{
 y: 100,
  opacity: 0,
  // duration: 100

})
.from(".phaseDetails", 
{
  y: 100,
  opacity: 0,
  // duration: 10
});


              
              
              
              
              
              
              
ScrollTrigger.create({
  trigger: ".scrollBoi",
  animation: timeline,
  // Uncomment these to see how they affect the ScrollTrigger
  markers: false,
  start: "top center",
  end: "top top",
  scrub: true,

});