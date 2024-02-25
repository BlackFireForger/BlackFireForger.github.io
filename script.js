const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

  // Get the video element
let video = document.getElementById("myVideo");

  // Function to handle video load
  function handleVideoLoad() {
    // Intersection Observer to check if more than 50% of the video is in the viewport
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.intersectionRatio > 0.5) {
          // More than 50% of the video is in the viewport
          video.currentTime = 0; // Restart the video
          video.play();
        } else {
          // Less than 50% of the video is in the viewport
          video.pause();
        }
      });
    }, { threshold: 0.5 });

    // Attach the observer to the video
    observer.observe(video);
  }



swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()