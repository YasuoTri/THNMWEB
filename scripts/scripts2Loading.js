let count = 0;
let loading = document.getElementById("loading");
let preloading = document.querySelector(".preloading");
let valueShow = document.getElementById("value-show");
startLoading();
// setTimeout(startLoading, 3000);
function startLoading() {
  if (count == 100) {
    valueShow.innerHTML = "Finish";
    count = 0;
    loading.style.display = "none";
    preloading.classList.remove("preloading");
    return;
  } else {
    count = count + 10;
    valueShow.innerHTML = count + "%";
    loading.style.setProperty("--loading-value", count + "%");

    setTimeout(startLoading, 500);
  }
}
