const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
// loader animation
window.addEventListener('load', function () {
  var loader = document.getElementById('loader');
  var content = document.getElementById('content');
  setTimeout(function () {
    loader.style.display = 'none';
    content.style.display = 'block';
    initializeScrollTrigger();
  },200);
});

// for responsive nav bar 
let lastScrollTop = 0;
navbar = document.querySelector(".nav");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || this.document.elementFromPoint.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-10%";
  }
  else {
    navbar.style.top = "0%";
  }
  lastScrollTop = scrollTop;
})

// gsap 
function initializeScrollTrigger() {
  const slideCont = document.querySelector(".slideCont");
  const section2 = document.querySelector(".section2");

  gsap.to(slideCont, {
    transform: "translateX(-200%)",
    scrollTrigger: {
      trigger: section2,
      scroller: "body",
      // markers: true,
      start: "top 0%",
      end: "top -200%",
      scrub: 2,
      pin: true
    }
  });
  const threeDModle = document.querySelector(".threeDModle");
  const section1 = document.querySelector(".section1");
  const section3 = document.querySelector(".section3");
  const nav = document.querySelector(".nav");

  const tl1 = gsap.timeline();
  tl1.from(".threeDModle", {
    y: 600,
    duration: 2,
    ease: "elastic.out(1,0.3)",
  });

  tl1.from(".circle", {
    opacity: 0,
    duration: 2,
    ease: "back.out(1.7)",
  });

  tl1.from(".mainText1", {
    x: -500,
    opacity: 0,
    duration: 1,
    ease: "power1.inout",
  }, 'mainText');

  tl1.from(".mainText2", {
    x: 500,
    opacity: 0,
    duration: 1,
    ease: "power1.inout",
  }, 'mainText');

  tl1.from(".threeDModleRight", {
    x: 700,
    duration: 2,
    ease: "back.out(1.7)",
  }, 'bottle');

  tl1.from(".threeDModleLeft", {
    x: -700,
    duration: 2,
    ease: "back.out(1.7)",
  }, 'bottle');

  tl1.from(nav, {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power1.inOut"
  });

  tl1.from(".iconSection1", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "circ.out",
  }, 'icon');

  tl1.from(".iconSection2", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "circ.out",
  }, 'icon');

  tl1.from(".exploreSection", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power1.inout",
  }, 'icon');


  //  3d model animation 
  const threeD = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      // markers:true,
      start: "30% 50%",
      end: "3% 50%",
      scrub: true,
    }
  });


  threeD.to(".threeDModle", {
    left: "-30%",
  });


  threeD.to(".threeDModle", {
    top: "29%",
    left: "32%",
    scale: "1.3",
    duration: "2",
  });




  //  section 3 animation 

  const section3Animation = gsap.timeline({
    scrollTrigger: {
      position: "fixed",
      trigger: ".section3",
      start: "top 0%",
      end: "top -300%",
      scrub: true,
      pin: true,
    }
  });
  
  // Function to apply animations based on screen size
  function applyAnimations() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      // Mobile animations
      section3Animation.to(".textPart1", {
        scale: 1,
        borderRadius: "0px",
        duration: 8,
      });
  
      section3Animation.to(".img1", {
        width: "100%",
        duration: 8,
      });
  
      section3Animation.to(".section3part2", {
        zIndex: "4",
      });
  
      section3Animation.to(".img2", {
        width: "100%",
        duration: 8,
      });
  
      section3Animation.to(".textPart2", {
        scale: 1,
        borderRadius: "10px",
        duration: 8,
      });
  
      section3Animation.to(".section3part3", {
        zIndex: "5",
      });
  
      section3Animation.to(".textPart3", {
        scale: 1,
        borderRadius: "10px",
        duration: 8,
      });
  
      section3Animation.to(".img3", {
        width: "100%",
        duration: 8,
      });
    } else {
      // Desktop animations
      section3Animation.to(".textPart1", {
        scale: 1,
        borderRadius: "0px",
        duration: 8,
      });
  
      section3Animation.to(".img1", {
        width: "50%",
        duration: 8,
      });
  
      section3Animation.to(".section3part2", {
        zIndex: "4",
      });
  
      section3Animation.to(".img2", {
        width: "50%",
        duration: 8,
      });
  
      section3Animation.to(".textPart2", {
        scale: 1,
        borderRadius: "0px",
        duration: 8,
      });
  
      section3Animation.to(".section3part3", {
        zIndex: "5",
      });
  
      section3Animation.to(".textPart3", {
        scale: 1,
        borderRadius: "0px",
        duration: 8,
      });
  
      section3Animation.to(".img3", {
        width: "50%",
        duration: 8,
      });
    }
  }
  
  // Call the function on load
  applyAnimations();
  
  // Reapply animations on window resize
  window.addEventListener('resize', applyAnimations);
  
  const triangleAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".secondPage3",
      start: "200% 50%",
      end: "250% 50%",
      // markers:true,
      scrub: true,
    }
  });
  triangleAnimation.from(".traingle1",{
    x:-500,
    duration:8,
  },'traingle')
  triangleAnimation.from(".traingle2",{
    x:500,
    duration:8,
  },'traingle')
  triangleAnimation.from(".traingleTextLeft",{
    x:-550,
    duration:8,
  },"traingleText")
  triangleAnimation.from(".traingleTextRight",{
    x:510,
    duration:8,
  },"traingleText")

  const buySection = gsap.timeline({
    scrollTrigger: {
      trigger: ".secondPage5",
      start: "93.5% 50%",
      end: "95% 50%",
      // markers:true,
      scrub: true,
    }
  });

  buySection.from(".f1",{
    opacity:0,
    duration:2,
    left:-100,
  })
  buySection.from(".f2",{
    opacity:0,
    duration:2,
  })
  buySection.from(".f3",{
    opacity:0,
    duration:2,
    left:100,
  })
  buySection.from(".flavourText",{
    opacity:0,
    left:"-200px",
    duration:2, 
    // top:,
  })




const leftArrowBtn = document.querySelector(".leftArrow");
const rightArrowBtn = document.querySelector(".rightArrow");
const ffff1 = document.querySelector(".ffff1");
const ffff2 = document.querySelector(".ffff2");
rightArrowBtn.addEventListener("mouseenter",function(){
    ffff2.classList.add("opacity1");
    ffff2.classList.remove("opacity0");
    ffff1.classList.add("opacity0");
    ffff1.classList.remove("opacity1");
})
leftArrowBtn.addEventListener("mouseenter",function(){
  ffff1.classList.add("opacity1");
  ffff1.classList.remove("opacity0");
  ffff2.classList.add("opacity0");
  ffff2.classList.remove(" opacity1");
})








};



//cursor animation
// Function to initialize cursor effects
function initializeCursorEffects() {
  var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0;

  gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY
        }
      });
    }
  });

  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('grow');
      cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
      cursor.classList.add('grow');
      if (link.classList.contains('small')) {
        cursor.classList.remove('grow');
        cursor.classList.add('grow-small');
      }
    });
  });
}

// Check if the screen width is greater than 768px (desktop)
if (window.matchMedia("(min-width: 768px)").matches) {
  initializeCursorEffects();
}




// section2pageanimationvideo
// Function to check if the device is a desktop
function isDesktop() {
  return window.innerWidth > 1024; // Adjust the width as needed for your breakpoint
}

if (isDesktop()) {
  document.addEventListener('mousemove', function (e) {
    const video = document.querySelector('.video');
    video.style.clipPath = `circle(250px at ${e.clientX}px ${e.clientY}px)`; // Updated to 250px radius
    video.style.webkitClipPath = `circle(250px at ${e.clientX}px ${e.clientY}px)`; // Webkit prefix for Safari
  });
}

// triangle animation 

