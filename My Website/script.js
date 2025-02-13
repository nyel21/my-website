const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Function to toggle theme
function toggleTheme() {
    body.classList.toggle("light-mode");
    localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
}

// Apply saved theme on page load
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
}

// Add event listener to toggle button
themeToggle.addEventListener("click", toggleTheme);
