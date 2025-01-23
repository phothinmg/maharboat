var _themevar = "colorSchema",
  systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
  themeBtn = document.getElementById("theme"),
  _el = document.querySelector("html");
function getLocalTheme() {
  return localStorage.getItem(_themevar);
}
function applyTheme(theme) {
  _el.setAttribute("data-theme", theme), localStorage.setItem(_themevar, theme);
}
window.addEventListener("load", function () {
  var local_theme = getLocalTheme();
  applyTheme(null !== local_theme ? local_theme : systemTheme);
}),
  themeBtn.addEventListener("click", function (e) {
    e.preventDefault(),
      applyTheme("dark" === getLocalTheme() ? "light" : "dark");
  });
