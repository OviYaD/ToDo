var swiper1 = new Swiper(".slide-content", {
  slidesPerView: 5,
  spaceBetween: -60,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "false",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".right1",
    prevEl: ".left1"
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    50: {
      slidesPerView: 2
    },
    100: {
      slidesPerView: 3
    },
    150: {
      slidesPerView: 4
    },
    1000: {
      slidesPerView: 5
    }
  }
});

var swiper2 = new Swiper(".slide2-content", {
  slidesPerView: 2,
  spaceBetween: -130,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "false",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".right2",
    prevEl: ".left2"
  },

  breakpoints: {
    10: {
      slidesPerView: 1
    },
    50: {
      slidesPerView: 2
    }
    // 100: {
    //   slidesPerView: 3
    // },
    // 150: {
    //   slidesPerView: 4
    // }
    // 1000: {
    //   slidesPerView: 5
    // }
  }
});

var swiper3 = new Swiper(".slide3-content", {
  slidesPerView: 5,
  spaceBetween: -60,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "false",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".right3",
    prevEl: ".left3"
  },

  breakpoints: {
    10: {
      slidesPerView: 1
    },
    50: {
      slidesPerView: 2
    },
    100: {
      slidesPerView: 3
    },
    150: {
      slidesPerView: 4
    },
    1000: {
      slidesPerView: 5
    }
  }
});
