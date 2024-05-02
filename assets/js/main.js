(function ($) {
  ("use strict");

  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(window).on("load", function () {
    $(window).trigger("scroll");
    $(window).trigger("resize");
  });

  $(function () {
    $(window).trigger("resize");
    mainNav();
    stickyHeader();
    swiperInit();
  });

  function mainNav() {
    $(".ak-nav").append('<span class="ak-munu_toggle"><span></span></span>');
    $(".menu-item-has-children").append(
      '<span class="ak-munu_dropdown_toggle"></span>'
    );
    $(".ak-munu_toggle").on("click", function () {
      $(this)
        .toggleClass("ak-toggle_active")
        .siblings(".ak-nav_list")
        .slideToggle();
    });
    $(".ak-munu_dropdown_toggle").on("click", function () {
      $(this).toggleClass("active").siblings("ul").slideToggle();
      $(this).parent().toggleClass("active");
    });

    $(".menu-item-has-black-section").append(
      '<span class="ak-munu_dropdown_toggle_1"></span>'
    );

    $(".ak-munu_dropdown_toggle_1").on("click", function () {
      $(this).toggleClass("active").siblings("ul").slideToggle();
      $(this).parent().toggleClass("active");
    });

    $(".ak-mode_btn").on("click", function () {
      $(this).toggleClass("active");
      $("body").toggleClass("ak-dark");
    });
    // Side Nav
    $(".ak-icon_btn").on("click", function () {
      $(".ak-side_header").addClass("active");
    });
    $(".ak-close, .ak-side_header_overlay").on("click", function () {
      $(".ak-side_header").removeClass("active");
    });
    //  Menu Text Split
    $(".ak-animo_links > li > a").each(function () {
      let xxx = $(this).html().split("").join("</span><span>");
      $(this).html(`<span class="ak-animo_text"><span>${xxx}</span></span>`);
    });
  }

  function stickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $(".ak-sticky_header");
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass("ak-gescout_sticky");
      } else {
        $header.removeClass("ak-gescout_sticky");
        $header.removeClass("ak-gescout_show");
      }

      if ($header.hasClass("ak-gescout_sticky")) {
        if (windowTop < lastScrollTop) {
          $header.addClass("ak-gescout_show");
        } else {
          $header.removeClass("ak-gescout_show");
        }
      }

      lastScrollTop = windowTop;
    });
  }

  function swiperInit() {
    if ($.exists(".slider_hero_1")) {
      var swiper = new Swiper(".slider_hero_1", {
        loop: true,
        speed: 1200,
        effect: "coverflow",
        autoplay: true,
        slidesPerView: 1,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".hero-swiper-button-prev-1",
          prevEl: ".hero-swiper-button-next-1",
        },
      });
    }

    if ($.exists(".slider_2")) {
      var swiper = new Swiper(".slider_2", {
        loop: true,
        speed: 1000,
        autoplay: false,
        slidesPerView: "auto",
        navigation: {
          nextEl: ".slider_2-prev",
          prevEl: ".slider_2-next",
        },
      });
    }

    if ($.exists(".partner-client-slider")) {
      var swiper = new Swiper(".partner-client-slider", {
        loop: true,
        speed: 1000,
        autoplay: true,
        slidesPerView: "auto",
        pagination: {
          clickable: true,
        },
      });
    }

    /* if ($.exists(".ak-slider-testimonal")) {
      var swiper = new Swiper(".ak-slider-testimonal", {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: false,
        slidesPerView: "auto",
        pagination: {
          el: ".ak-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".testimonal-prev",
          prevEl: ".testimonal-next",
        },
      });
    }
 */
    /*  if ($.exists(".team-single-page-slider")) {
      var swiper = new Swiper(".team-single-page-slider", {
        loop: true,
        speed: 1000,
        autoplay: true,
        slidesPerView: "auto",
        effect: "coverflow",
        spaceBetween: "12%",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        },
        keyboard: {
          enabled: true,
        },
         mousewheel: {
          thresholdDelta: 70,
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
      });
    } */
  }
  const experiencesBtn = document.querySelector(".experiences-btn");
  const educationBtn = document.querySelector(".educationt-btn");

  const experiencesCards = document.querySelectorAll(".Experiences");
  const educationCards = document.querySelectorAll(".Education");

  experiencesBtn.addEventListener("click", () => {
    experiencesCards.forEach((card) => (card.style.display = "block"));
    educationCards.forEach((card) => (card.style.display = "none"));
    // experiencesBtn.classList.remove("active");
    educationBtn.classList.remove("active");
    experiencesBtn.classList.add("active");
  });

  educationBtn.addEventListener("click", () => {
    experiencesCards.forEach((card) => (card.style.display = "none"));
    educationCards.forEach((card) => (card.style.display = "block"));
    experiencesBtn.classList.remove("active");
    educationBtn.classList.add("active");
  });
})(jQuery);
