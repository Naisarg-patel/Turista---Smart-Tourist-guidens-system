// Get all screens
const screens = {
 login: document.getElementById("login-screen"),
  register: document.getElementById("register-screen"),
  feature: document.getElementById("feature-select-screen"),
  city: document.getElementById("city-screen"),
  menu: document.getElementById("main-menu-screen"),
  dashboard: document.getElementById("dashboard-screen"),
};

let currentScreen = null;
let previousScreen = null;

// Show only one screen
function showScreen(screenName) {
  previousScreen = currentScreen;
  currentScreen = screenName;

  Object.values(screens).forEach(screen =>
    screen.classList.remove("active")
  );

  screens[screenName].classList.add("active");
}


// DEFAULT SCREEN
window.onload = () => {
  showScreen("login");
};

// City selection
document.querySelectorAll(".city-btn").forEach(btn => {
  btn.onclick = () => showScreen("menu");
});

// Menu to dashboard
document.querySelectorAll(".menu-feature-btn").forEach(btn => {
  btn.onclick = () => showScreen("dashboard");
});
