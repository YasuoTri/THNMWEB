const menu = document.getElementById("menu");
let isMouseDown = false;
let startX = 0;
let scrollLeft = 0;

menu.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.pageX - menu.offsetLeft;
  scrollLeft = menu.scrollLeft;
});

menu.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

menu.addEventListener("mouseup", () => {
  isMouseDown = false;
});

menu.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - menu.offsetLeft;
  const walk = (x - startX) * 2; // Điều chỉnh tốc độ kéo
  menu.scrollLeft = scrollLeft - walk;
});
