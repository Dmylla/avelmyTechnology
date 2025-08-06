


 let obj= { val: 0 };

  ScrollTrigger.create({
    trigger: ".metrics-title.title500",
    start: "top 90%", // quando o topo do contador chegar em 80% da viewport
    once: true, // só anima uma vez
    onEnter: () => {
      gsap.to(obj, {
        val: 500,
        duration: 2,
        ease: "power2.out",
        snap: { val: 1 },
        onUpdate: () => {
          document.querySelector(".metrics-title.title500").innerText = obj.val + "+";
        }
      });
    }
  });


 let obj1 = { val: 0 };

  ScrollTrigger.create({
    trigger: ".metrics-title.title13",
    start: "top 90%", // quando o topo do contador chegar em 80% da viewport
    once: true, // só anima uma vez
    onEnter: () => {
      gsap.to(obj, {
        val: 13,
        duration: 3,
        ease: "power2.out",
        snap: { val: 1 },
        onUpdate: () => {
          document.querySelector(".metrics-title.title13").innerText = obj.val + "+";
        }
      });
    }
  });

 let obj2 = { val: 0 };

  ScrollTrigger.create({
    trigger: ".metrics-title.title2",
    start: "top 90%", // quando o topo do contador chegar em 80% da viewport
    once: true, // só anima uma vez
    onEnter: () => {
      gsap.to(obj, {
        val: 2,
        duration: 4,
        ease: "power2.out",
        snap: { val: 1 },
        onUpdate: () => {
          document.querySelector(".metrics-title.title2").innerText = obj.val + "+";
        }
      });
    }
  });
 

  let obj3 = { val: 0 };

  ScrollTrigger.create({
    trigger: ".metrics-title.title15",
    start: "top 90%", // quando o topo do contador chegar em 80% da viewport
    once: true, // só anima uma vez
    onEnter: () => {
      gsap.to(obj, {
        val: 15,
        duration: 3,
        ease: "power2.out",
        snap: { val: 1 },
        onUpdate: () => {
          document.querySelector(".metrics-title.title15").innerText = obj.val + "+";
        }
      });
    }
  });


  gsap.fromTo(".metrics-icon" , {
    x: -30,
    opacity:0,
},{
    x:0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger:".metrics-icon",
        start:"top 60%",
        toggleActions:"play none none none"
    }
})

  gsap.fromTo(".metrics-description" , {
    y: 30,
    opacity:0,
},{
    y:0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger:".metrics-description",
        start:"top 70%",
        toggleActions:"play none none none"
    }
})