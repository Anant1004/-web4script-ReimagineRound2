// script.js
window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
    setTimeout(function() {
        loader.style.display = 'none';
        content.style.display = 'block';
        initializeScrollTrigger();
    }, 200); 
});

// for responsive nav bar 
let lastScrollTop =0;
navbar = document.querySelector(".nav");
window.addEventListener("scroll",function(){
  var scrollTop = window.pageYOffset || this.document.elementFromPoint.scrollTop;
  if(scrollTop > lastScrollTop){
    navbar.style.top="-10%";
  }
  else{
    navbar.style.top="0%";
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
    const section1= document.querySelector(".section1");
    const section3= document.querySelector(".section3");
    const nav= document.querySelector(".nav");

    const tl1 = gsap.timeline();
    tl1.from(".threeDModle",{
      y:600,
      // rotate:"360deg",
      duration:2,
      ease: "elastic.out(1,0.3)",
    });
    
    tl1.from(".circle",{
      opacity:0,
      duration:2,
      ease: "back.out(1.7)",
    });
    tl1.from(".mainText1",{
      x:-500,
      opacity:0,
      duration:1,
      ease:"power1.inout",
    },'mainText');
    tl1.from(".mainText2",{
      x:500,
      opacity:0,
      duration:1,
      ease:"power1.inout",
    },'mainText');
    tl1.from(".threeDModleRight",{
      x:700,
      // rotate:"360deg",
      duration:2,
      ease: "expo.inOut",
    },'bottle');
    tl1.from(".threeDModleLeft",{
      x:-700,
      // rotate:"360deg",
      duration:2,
      ease: "back.out(1.7)",
    },'bottle');
    tl1.from(nav,{
        y: -100,
        opacity:0,
        duration: 1, // duration of 1 second
        ease: "power1.inOut" // easing function for smooth animation
      });

      tl1.from(".iconSection1",{
        x:-100,
        opacity:0,
        duration:1,
        ease: "circ.out",
      },'icon');
      tl1.from(".iconSection2",{
        x:100,
        opacity:0,
        duration:1,
        ease: "circ.out",
      },'icon');
      tl1.from(".exploreSection",{
        x:-100,
        opacity:0,
        duration:1,
        ease:"power1.inout",
      },'icon');
    };


//cursor animation
var cursor =document.querySelector('.cursor'),
        cursorScale = document.querySelectorAll('.cursor-scale'),
         mouseX = 0;
         mouseY = 0;
         gsap.to({}, 0.016,{
            repeat:-1,
            onRepeat:function(){
                gsap.set(cursor, {
                    css:{
                        left:mouseX,
                        top:mouseY
                    }
                })

            }
         });
         window.addEventListener("mousemove" ,function (e){
            mouseX = e.clientX;
            mouseY = e.clientY;
         })
         cursorScale.forEach(link => {
            link.addEventListener('mouseleave', ()=> {
                cursor.classList.remove('grow');
                cursor.classList.remove('grow-small');

            });
            link.addEventListener('mousemove', ()=> {
                cursor.classList.add('grow');
                if(link.classList.contains('small')){
                    cursor.classList.remove('grow');
                    cursor.classList.add('grow-small');
                }
            });
         })

