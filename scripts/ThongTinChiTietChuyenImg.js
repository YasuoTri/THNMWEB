function AlterImg1() {
  var img = document.querySelector("#imgOf");
  img.src = "/images/DongHoPhanBody2/pic3.webp";
}
function AlterImg2() {
  var img = document.querySelector("#imgOf");
  img.src = "/images/ImgChiTietSP/SP1/ChiTiet2.webp";
}
function AlterImg3() {
  var img = document.querySelector("#imgOf");
  img.src = "/images/ImgChiTietSP/SP1/ChiTiet3.webp";
}
var even = 0;
function AlterIcon() {
  var icon = document.querySelector("#icon");
  if (even % 2 == 0) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
    even++;
  } else {
    icon.classList.add("fa-regular");
    icon.classList.remove("fa-solid");
    even++;
  }
}
