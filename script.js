// Mobile Nav Toggle
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

// Accessibility Options
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function increaseFontSize() {
    document.body.style.fontSize = 'larger';
}

function decreaseFontSize() {
    document.body.style.fontSize = 'smaller';
}

// Language Selector
function changeLanguage(lang) {
    // This is where you could add logic for changing language dynamically
    alert(`Language changed to ${lang}`);
}

// Copy IP to Clipboard
function copyToClipboard() {
    const ip = '23.26.247.227:26246';
    navigator.clipboard.writeText(ip);
    alert('IP copied to clipboard!');
}
