// Copy IP Functionality
function copyIP() {
    const tempInput = document.createElement('input');
    tempInput.value = "23.26.247.227:26246";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("IP Copied: 23.26.247.227:26246");
}

// Toggle Navigation for Mobile
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Accessibility: Dark Mode Toggle
let darkMode = false;
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    darkMode = !darkMode;
}

// Accessibility: Font Size Adjustments
let currentFontSize = 1;
function increaseFontSize() {
    currentFontSize += 0.1;
    document.body.style.fontSize = currentFontSize + 'rem';
}

function decreaseFontSize() {
    currentFontSize -= 0.1;
    document.body.style.fontSize = currentFontSize + 'rem';
}

// Language Change Functionality
function changeLanguage(language) {
    // This is a placeholder. Ideally, you'd load translations from a file.
    alert('Language switched to: ' + language);
}
