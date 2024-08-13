
gsap.registerPlugin(ScrollTrigger);
gsap.from("#leftside", {
  scrollTrigger: {
    trigger: "#leftside",
    start: "top center",
    end: "bottom top",
    scrub: true
  },
  x: -200,
  opacity: 0,
  duration: 1
});

gsap.from("#rightside", {
  scrollTrigger: {
    trigger: "#rightside",
    start: "top center",
    end: "bottom top",
    scrub: true
  },
  x: 200,
  opacity: 0,
  duration: 1
});

gsap.from("#moon", {
  scrollTrigger: {
    trigger: "#moon",
    start: "top center",
    end: "bottom top",
    scrub: true
  },
  y: -200,
  opacity: 0,
  duration: 1
});

gsap.from("#bottom", {
  scrollTrigger: {
    trigger: "#bottom",
    start: "top center",
    end: "bottom top",
    scrub: true
  },
  y: 200,
  opacity: 0,
  duration: 1
});

gsap.from("#leftpumpkin", {
  scrollTrigger: {
    trigger: "#leftpumpkin",
    start: "top center",
    end: "bottom top",
    scrub: true
  },
  x: -200,
  opacity: 0,
  duration: 1
});

gsap.from("#rightpumpkin", {
  scrollTrigger: {
    trigger: "#rightpumpkin",
    start: "top center",
    end: "bottom top",
    scrub: true
  },
  x: 200,
  opacity: 0,
  duration: 1
});

var swiper = new Swiper('.swiper', {
  speed: 600,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

    // // Initialize Swiper
    // var swiper = new Swiper('.swiper', {
    //   autoplay: {
    //     delay: 4500,
    //     // disableOnInteraction: false, // Continue autoplay after user interactions
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   parallax: true,
    //   speed: 1500, // Slide transition speed
    //   navigation: {
    //     nextEl: '.next',
    //     prevEl: '.prev',
    //   },
    // });
    $(document).ready(function() {
      $(".countdown").final_countdown(
        {
          start: "1362139200",
          end: "1388461320",
          // now: "1387461319",
          selectors: {
            value_seconds: ".clock-seconds .val",
            canvas_seconds: "canvas_seconds",
            value_minutes: ".clock-minutes .val",
            canvas_minutes: "canvas_minutes",
            value_hours: ".clock-hours .val",
            canvas_hours: "canvas_hours",
            value_days: ".clock-days .val",
            canvas_days: "canvas_days"
          },
          seconds: {
            borderColor: "#7995D5",
            borderWidth: "6"
          },
          minutes: {
            borderColor: "#ACC742",
            borderWidth: "6"
          },
          hours: {
            borderColor: "#ECEFCB",
            borderWidth: "6"
          },
          days: {
            borderColor: "#FF9900",
            borderWidth: "6"
          }
        },
        function() {
          // Finish callback
        }
      );
    });
    $('.countdown').final_countdown({
        start: '1362139200',
        end: '1388461320',
        // now: '1387461319'
      });