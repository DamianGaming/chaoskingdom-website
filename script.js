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
    // Theme
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Font Size
    const fontSize = localStorage.getItem("fontSize");
    if (fontSize) {
        document.body.style.fontSize = fontSize;
    }

    // Contrast Mode
    const contrastMode = localStorage.getItem("contrastMode");
    if (contrastMode === "high") {
        document.body.classList.add("high-contrast-mode");
    }

    // Language
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
        setLanguage(savedLanguage);
    }
};

// Language Handling Function
function setLanguage(language) {
    const allElements = document.querySelectorAll("[data-en], [data-es]");
    allElements.forEach((element) => {
        element.style.display = "none"; // Hide all language elements first
        if (element.hasAttribute(`data-${language}`)) {
            element.style.display = ""; // Show the selected language elements
        }
    });
}
