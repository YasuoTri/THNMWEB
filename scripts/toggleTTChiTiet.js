$(document).ready(function () {
    $("#TTSPthem").click(function () {
        $("#TTSPicon1").fadeOut(0);
      $("#TTSPContent").fadeIn(1000);
        $("#TTSPicon2").fadeIn(1000);
    });
  });
  $(document).ready(function () {
    $("#TTSPrut").click(function () {
      $("#TTSPContent").fadeOut("slow",function(){
        $("#TTSPicon1").fadeIn("slow");
        $("#TTSPicon2").fadeOut("slow");
      });
    });
  });
  $(document).ready(function () {
    $("#commentInput").focus(function () {
        $(this).css("text-align", "center"); // Canh giữa khi focus vào
    });

    $("#commentInput").blur(function () {
        $(this).css("text-align", ""); // Xóa thuộc tính canh giữa khi mất focus
    });
});
$(document).ready(function(){
    $("#commentInput").click(function(){
        $("#ContentBL").slideToggle("slow");
    })
})