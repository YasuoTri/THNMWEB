$(document).ready(function () {
  $("#toggleButton").click(function () {
    $("#ContenToggle").slideToggle("slow");
  });
});
$(document).ready(function () {
  $("#toggleButton1").click(function () {
    $("#ContenToggle1").slideToggle("slow");
  });
});
$(document).ready(function () {
  $("#toggleButton2").click(function () {
    $("#ContenToggle2").slideToggle("slow");
  });
});
$(document).ready(function () {
  $("#toggleButton3").click(function () {
    $("#ContenToggle3").slideToggle("slow");
  });
});
$(document).ready(function () {
  $("#toggleButton4").click(function () {
    $("#ContenToggle4").slideToggle("slow");
  });
});
$(document).ready(function () {
  function ShrinkToggle() {
    if ($(window).width() < 767) {
      $("#toggleButton").trigger("click");
      $("#toggleButton1").trigger("click");
      $("#toggleButton2").trigger("click");
      $("#toggleButton3").trigger("click");
      $("#toggleButton4").trigger("click");
    }
  }
  $(window).resize(ShrinkToggle);
});
