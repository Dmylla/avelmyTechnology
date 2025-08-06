

gsap.fromTo(".about-section-title" , {
    y: 30,
    opacity:0,
},{
    y:0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger:".about-section-title",
        start:"top 60%",
        toggleActions:"play none none none"
    }
})

gsap.fromTo(".about-section-subtitle" , {
    y: 30,
    opacity:0,
},{
    y:0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger:".about-section-subtitle",
        start:"top 70%",
        toggleActions:"play none none none"
    }
})

gsap.fromTo(".about-section-description" , {
    y: 30,
    opacity:0,
},{
    y:0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger:".about-section-description",
        start:"top 70%",
        toggleActions:"play none none none"
    }
})

gsap.fromTo(".shape-0" , {
    x: -30,
    opacity:0,
},{
    x:0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger:".shape-0",
        start:"top 40%",
        toggleActions:"play none none none"
    }
})

gsap.to(".shape-0", {
  y: -20,             // move para cima 20px
  duration: 2,        // leva 2 segundos
  repeat: -1,         // repete para sempre
  yoyo: true,         // volta ao estado original
  ease: "sine.inOut"  // movimento suave
});

gsap.to(".shape-1", {
  x: 20,             // move para cima 20px
  duration: 2,        // leva 2 segundos
  repeat: -1,         // repete para sempre
  yoyo: true,         // volta ao estado original
  ease: "sine.inOut"  // movimento suave
});

// img
gsap.fromTo(".about-img" , {
    x: -30,
    opacity:0,
},{
    x:0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger:".about-img",
        start:"top 40%",
        toggleActions:"play none none none"
    }
})

// bordar azul img
gsap.fromTo(".shape-2" , {
    x: -50,
    opacity:0,
},{
    x:0,
    duration:2.3,
    opacity:1,
    scrollTrigger: {
        trigger:".shape-2",
        start:"top 30%",
        toggleActions:"play none none none"
    }
})

gsap.fromTo(".shape-3" , {
    x: -50,
    opacity:0,
},{
    x:0,
    duration:2.3,
    opacity:1,
    scrollTrigger: {
        trigger:".shape-3",
        start:"top 95%",
        toggleActions:"play none none none"
    }
})

gsap.to(".shape-3", {
  y: -20,  
  x:20,           
  duration: 4,        
  repeat: -1,        
  yoyo: true,         
  ease: "sine.inOut"  // movimento suave
});

