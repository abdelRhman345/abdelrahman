$(function () {
  "use strict";
  $(".navbar .collapse .navbar-nav .nav-item .nav-link").click(function () {
    $(this).addClass("active").siblings().removeClass("active"),
      $("html, body").animate(
        { scrollTop: $("#" + $(this).data("value")).offset().top - 60 },
        1500
      );
  }),
    $(".navbar .collapse .navbar-nav .nav-item").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    }),
    $(window).scroll(function () {
      150 <= $(window).scrollTop()
        ? $(".navbar").addClass("show")
        : $(".navbar").removeClass("show");
    });

  // Scroll to anchor ID using scrollTO event
  let sectionOne    = document.querySelector('#home'),
    sectionTwo    = document.querySelector('#about-me'),
    sectionThree  = document.querySelector('#services'),
    sectionFour   = document.querySelector('#client'),
    sectionFive  = document.querySelector('#portfolio'),
    sectionSix   = document.querySelector('#contact');
  
  window.addEventListener('scroll', function() {
    const windo = window.pageYOffset + 200,
          listOne = document.querySelector('li:nth-child(1)'),
          listTwo = document.querySelector('li:nth-child(2)'),
          listThree = document.querySelector('li:nth-child(3)'),
          listFour = document.querySelector('li:nth-child(4)'),
          listFive = document.querySelector('li:nth-child(5)'),
          listSix = document.querySelector('li:nth-child(6)');
    if(sectionOne.offsetTop <= windo && sectionTwo.offsetTop > windo) {
      listOne.setAttribute("class", "active nav-item");
      listTwo.removeAttribute("class", "active");
      listThree.removeAttribute("class", "active");
      listFour.removeAttribute("class", "active");
      listFive.removeAttribute("class", "active");
      listSix.removeAttribute("class", "active");
      // Set Attribute nav-item
      listThree.setAttribute("class", "nav-item");
      listFour.setAttribute("class", "nav-item");
      listTwo.setAttribute("class", "nav-item");
      listFive.setAttribute("class", "nav-item");
      listSix.setAttribute("class", "nav-item");
    } else if(sectionTwo.offsetTop <= windo && sectionThree.offsetTop > windo) {
      listTwo.setAttribute("class", "active nav-item");
      listOne.removeAttribute("class", "active");
      listThree.removeAttribute("class", "active");
      listFour.removeAttribute("class", "active");
      listFive.removeAttribute("class", "active");
      listSix.removeAttribute("class", "active");
      // Set Attribute nav-item
      listThree.setAttribute("class", "nav-item");
      listFour.setAttribute("class", "nav-item");
      listOne.setAttribute("class", "nav-item");
      listFive.setAttribute("class", "nav-item");
      listSix.setAttribute("class", "nav-item");
    } else if(sectionThree.offsetTop <= windo && sectionFour.offsetTop > windo) {
      listThree.setAttribute("class", "active nav-item");
      listTwo.removeAttribute("class", "active");
      listOne.removeAttribute("class", "active");
      listFour.removeAttribute("class", "active");
      listFive.removeAttribute("class", "active");
      listSix.removeAttribute("class", "active");
      // Set Attribute nav-item
      listTwo.setAttribute("class", "nav-item");
      listFour.setAttribute("class", "nav-item");
      listOne.setAttribute("class", "nav-item");
      listFive.setAttribute("class", "nav-item");
      listSix.setAttribute("class", "nav-item");
    } else if(sectionFour.offsetTop <= windo && sectionFive.offsetTop > windo) {
      listFour.setAttribute("class", "active nav-item");
      listTwo.removeAttribute("class", "active");
      listThree.removeAttribute("class", "active");
      listOne.removeAttribute("class", "active");
      listFive.removeAttribute("class", "active");
      listSix.removeAttribute("class", "active");
      // Set Attribute nav-item
      listTwo.setAttribute("class", "nav-item");
      listThree.setAttribute("class", "nav-item");
      listOne.setAttribute("class", "nav-item");
      listFive.setAttribute("class", "nav-item");
      listSix.setAttribute("class", "nav-item");
    } else if(sectionFive.offsetTop <= windo && sectionSix.offsetTop > windo) {
      listFive.setAttribute("class", "active nav-item");
      listTwo.removeAttribute("class", "active");
      listOne.removeAttribute("class", "active");
      listFour.removeAttribute("class", "active");
      listSix.removeAttribute("class", "active");
      listThree.removeAttribute("class", "active");
      // Set Attribute nav-item
      listTwo.setAttribute("class", "nav-item");
      listThree.setAttribute("class", "nav-item");
      listOne.setAttribute("class", "nav-item");
      listFour.setAttribute("class", "nav-item");
      listSix.setAttribute("class", "nav-item");
    } else if(sectionSix.offsetTop <= windo) {
      listSix.setAttribute("class", "active nav-item");
      listTwo.removeAttribute("class", "active");
      listThree.removeAttribute("class", "active");
      listOne.removeAttribute("class", "active");
      listFour.removeAttribute("class", "active");
      listFive.removeAttribute("class", "active");
      // Set Attribute nav-item
      listTwo.setAttribute("class", "nav-item");
      listThree.setAttribute("class", "nav-item");
      listOne.setAttribute("class", "nav-item");
      listFour.setAttribute("class", "nav-item");
      listFive.setAttribute("class", "nav-item");
    }
  });
});
