$(function () {
  //====drawer.js
  $(".drawer").drawer();

  //====scroll
  $('a[href^="#"]').click(function () {
    let header = jQuery(".header").innerHeight();
    let speed = 400;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    //====top~header
    let position = jQuery(target).offset().top - header;

    jQuery("html, body").animate(
      {
        scrollTop: position,
      },
      speed
    );
    return false;
  });

  //====wow.js
  new WOW().init();

  //====Swiper
  var mySwiper = new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 36,
    width: 400,
    loop: true,
    loopedSlides: 6,
    // slidesPerView: 1,

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        // slidesPerView: 1,
        spaceBetween: 20,
        width: 300,
      },
    },
  });

  //====faq
  $(".js-faq").on("click", function () {
    $(this).find(".js-faqA").stop().slideToggle(300);
    $(this).toggleClass("add-active");
  });

  //====contact
  (function () {
    var requireFlg = false;
    var privacyFlg = false;
    var $require = $("#js-contact-form .js-require");
    var fillCount = 0;

    function setSubmitProp() {
      if (requireFlg && privacyFlg) {
        $("#form-submit").prop("disabled", false);
      } else {
        $("#form-submit").prop("disabled", true);
      }
    }

    //====validation
    $require.on("blur", function () {
      if (
        $(this).attr("id") === "js-formKana" &&
        !$(this)
          .val()
          .match(/^([ァ-ン]|ー)+$/)
      ) {
        $(this).val("");
        alert("全角カタカナで入力してください。");
      }

      $require.each(function () {
        var value = $(this).val();

        if (value !== "" && value.match(/[^\s\t]/)) {
          fillCount++;
        }
      });

      requireFlg = fillCount === $require.length ? true : false;

      setSubmitProp();
      fillCount = 0;
    });

    //====privacy
    $("#form-privacy").on("change", function () {
      privacyFlg = $(this).prop("checked") ? true : false;
      setSubmitProp();
    });

    //====submit
    $("#js-contactForm").on("submit", function () {
      if (!(requireFlg && privacyFlg)) {
        alert("入力に誤りがあります。");
        return false;
      }
    });
  })();
});
