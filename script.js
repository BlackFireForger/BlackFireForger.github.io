const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");

  elemC.addEventListener("mouseenter", function () {
      fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
      fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
          var image = e.getAttribute("data-image");
          fixed.style.backgroundImage = `url(${image})`;
      });

      e.addEventListener("touchstart", function () {
          var image = e.getAttribute("data-image");
          fixed.style.backgroundImage = `url(${image})`;
          fixed.style.display = "block"; // Assuming you want to show the fixed element on touchstart
      });
  });
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
let muteButton = document.getElementById("muteButton");

// Function to handle video load and touchstart
function handleVideoLoad() {
  // Intersection Observer to check if more than 50% of the video is in the viewport
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
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

  // Add an event listener for touchstart on touchscreen devices
  video.addEventListener('touchstart', function () {
    video.currentTime = 0;
    video.play();
  });
}

// Function to toggle mute/unmute
function toggleMute() {
  video.muted = !video.muted;
  muteButton.textContent = video.muted ? 'Unmute the video shown below' : 'Mute the video shown below';
}

// Call handleVideoLoad when the document is fully loaded
document.addEventListener('DOMContentLoaded', handleVideoLoad);




swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()