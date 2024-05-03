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
    startCounters();
    experiences();
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

  function experiences() {
    if ($.exists(".experiences-btn")) {
      const experiencesBtn = document.querySelector(".experiences-btn");
      const educationBtn = document.querySelector(".educationt-btn");

      const experiencesCards = document.querySelectorAll(".Experiences");
      const educationCards = document.querySelectorAll(".Education");

      experiencesBtn.addEventListener("click", () => {
        experiencesCards.forEach((card) => (card.style.display = "block"));
        educationCards.forEach((card) => (card.style.display = "none"));

        educationBtn.classList.remove("active");
        experiencesBtn.classList.add("active");
      });

      educationBtn.addEventListener("click", () => {
        experiencesCards.forEach((card) => (card.style.display = "none"));
        educationCards.forEach((card) => (card.style.display = "block"));
        experiencesBtn.classList.remove("active");
        educationBtn.classList.add("active");
      });
    }
  }
  function startCounters() {
    if ($.exists(".counter-wrapper")) {
      const counters = {
        experience: { current: 0, target: 9, step: 0.2 },
        projects: { current: 0, target: 350, step: 3 },
        clients: { current: 0, target: 254, step: 2 },
        awards: { current: 0, target: 26, step: 0.5 },
      };

      const updateCounters = () => {
        for (const counter in counters) {
          if (counters.hasOwnProperty(counter)) {
            if (counters[counter].current < counters[counter].target) {
              counters[counter].current += counters[counter].step;
              document.getElementById(`${counter}Counter`).textContent =
                Math.round(counters[counter].current);
            }
          }
        }
      };

      setInterval(updateCounters, 8);
    }
  }
})(jQuery);
