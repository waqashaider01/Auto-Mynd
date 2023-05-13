// ----------Header Button Animation-----
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-7243260-2"]);
_gaq.push(["_trackPageview"]);
(function () {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src =
    ("https:" == document.location.protocol ? "https://ssl" : "http://www") +
    ".google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();

(function () {
  var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
  if (isSafari) {
    document.getElementById("support-note").style.display = "block";
  }
})();

// Section2

("use strict");

function carousel() {
  let carouselSlider = document.querySelector(".carousel__slider");
  let list = document.querySelector(".carousel__list");
  let item = document.querySelectorAll(".carousel__item");
  let list2;

  const speed = 1;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  function hover() {
    clearInterval(a);
    clearInterval(b);
  }

  function unhover() {
    a = setInterval(moveFirst, 10);
    b = setInterval(moveSecond, 10);
  }

  clone();

  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);

  carouselSlider.addEventListener("mouseenter", hover);
  carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();

//section 1

// function parallax(e) {
//   document.querySelectorAll(".object").forEach(function (move) {
//     var moving_value = move.getAttribute("data-value");

//     var x = (e.clientX * moving_value) / 250;
//     var y = (e.clientY * moving_value) / 250;

//     move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
//   });
// }

// document.addEventListener("mousemove", parallax);

//section 5
// Get the marquee elements
var marqueeElements = document.querySelectorAll(".marquee");

// Function to start the marquee animation
function startMarquee() {
  marqueeElements.forEach(function (marquee) {
    marquee.style.animationPlayState = "running";
  });
}

// Function to stop the marquee animation
function stopMarquee(event) {
  var targetMarquee = event.target.closest(".marquee");
  marqueeElements.forEach(function (marquee) {
    if (marquee !== targetMarquee) {
      marquee.style.animationPlayState = "paused";
    }
  });
}
