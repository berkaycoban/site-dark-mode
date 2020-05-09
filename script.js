document.getElementById("mode-btn").addEventListener("click", () => {
  document.body.classList.toggle("night");
  localStorage.setItem("mode", document.body.classList);
});

const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isDarkMode == true) {
  if (localStorage.getItem("mode") == "") {
    document.body.classList.remove("night");
  } else {
    document.body.classList.toggle("night");
    localStorage.setItem("mode", document.body.classList);
  }
} else {
  if (localStorage.getItem("mode") == "night") {
    document.body.classList.add("night");
  }
}
