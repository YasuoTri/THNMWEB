$(document).ready(function () {
  const targetElement = $(".target-element");
  const scrollFollowElement = $(".scroll-follow");

  $(window).scroll(function () {
    const targetPosition = targetElement.offset().top;
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition > targetPosition) {
      scrollFollowElement.addClass("active");
    } else {
      scrollFollowElement.removeClass("active");
    }
  });
});
