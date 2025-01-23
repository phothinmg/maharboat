var _themevar = "colorSchema";
var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
var themeBtn = document.getElementById("theme");
var _el = document.querySelector("html");

function getLocalTheme() {
  return localStorage.getItem(_themevar);
}

function applyTheme(theme) {
  _el.setAttribute("data-theme", theme);
  localStorage.setItem(_themevar, theme);
}

// Apply the theme on page load
window.addEventListener("load", function () {
  var local_theme = getLocalTheme();
  var _theme = local_theme !== null ? local_theme : systemTheme;
  applyTheme(_theme);
});

// Listen for changes on the theme selector
themeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var local_theme = getLocalTheme();
  var theme = local_theme === "dark" ? "light" : "dark";
  applyTheme(theme);
});
