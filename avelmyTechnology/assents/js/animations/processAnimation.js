
// gsap.fromTo(element ,{
//     x:-30,
//     opacity:0
// } , {
//     x:40,
//     opacity:1,
//     duration:1,
// }) 
 

  ScrollTrigger.create({
    trigger: "#lineSVG",
    start: "top 90%",
    once: true, // só executa uma vez
    onEnter: () => {
      new Vivus('lineSVG', {
        type: 'delayed',
        duration: 400,
        start: 'autostart'
      });
    }
  });



  

