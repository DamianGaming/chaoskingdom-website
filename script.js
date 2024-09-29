// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Increase Font Size
const increaseFontButton = document.getElementById("increaseFont");
increaseFontButton.addEventListener("click", function () {
    let currentFontSize = window.getComputedStyle(document.body).fontSize;
    let newFontSize = parseFloat(currentFontSize) + 2;
    document.body.style.fontSize = `${newFontSize}px`;
    localStorage.setItem("fontSize", `${newFontSize}px`);
});

// Decrease Font Size
const decreaseFontButton = document.getElementById("decreaseFont");
decreaseFontButton.addEventListener("click", function () {
    let currentFontSize = window.getComputedStyle(document.body).fontSize;
    let newFontSize = parseFloat(currentFontSize) - 2;
    document.body.style.fontSize = `${newFontSize}px`;
    localStorage.setItem("fontSize", `${newFontSize}px`);
});

// High Contrast Mode Toggle
const highContrastToggle = document.getElementById("highContrastToggle");
highContrastToggle.addEventListener("click", function () {
    document.body.classList.toggle("high-contrast-mode");
    if (document.body.classList.contains("high-contrast-mode")) {
        localStorage.setItem("contrastMode", "high");
    } else {
        localStorage.setItem("contrastMode", "normal");
    }
});

// Language Switching
const languageSelect = document.getElementById("languageSelect");
languageSelect.addEventListener("change", function () {
    const selectedLanguage = languageSelect.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
});

// Apply Settings from Local Storage (Persist User Preferences)
window.onload = function () {
    // Reset to default font size on page load
    document.body.style.fontSize = "16px";
    localStorage.removeItem("fontSize");

    // Theme
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Contrast Mode
    const contrastMode = localStorage.getItem("contrastMode");
    if (contrastMode === "high") {
        document.body.classList.add("high-contrast-mode");
    }

    // Language
    const language = localStorage.getItem("language");
    if (language) {
        languageSelect.value = language;
        setLanguage(language);
    }
};

// Language switching logic
function setLanguage(language) {
    if (language === "es") {
        document.querySelector('h1').innerText = "Bienvenido a ChaosKingdom";
        document.querySelector('.join-btn').innerText = "Únete ahora";
    } else {
        document.querySelector('h1').innerText = "Welcome to ChaosKingdom";
        document.querySelector('.join-btn').innerText = "Join Now";
    }
}

// Check website availability on every page load
const websiteAvailability = localStorage.getItem('websiteAvailability') || 'available';

if (websiteAvailability === 'unavailable') {
    document.getElementById('unavailableMessage').style.display = 'block';
    document.getElementById('mainContent').style.display = 'none';
}
