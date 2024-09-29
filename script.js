// Copy IP Address
document.getElementById('copyIP').addEventListener('click', function() {
    const ip = "23.26.247.227:26246";
    navigator.clipboard.writeText(ip).then(function() {
        alert("IP address copied: " + ip);
    });
});

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Decrease Font Size
function decreaseFontSize() {
    document.body.style.fontSize = "14px";
}

// Language Switcher
function switchLanguage() {
    const language = document.getElementById("languageSelect").value;
    if (language === "es") {
        alert("Cambiando a Español (This would actually change the language in a full implementation)");
    } else {
        alert("Switching to English");
    }
}

// Admin Login Function
function adminLogin() {
    const password = document.getElementById("adminPassword").value;
    if (password === "admin123") { // Replace with a more secure password system in production
        window.location.href = "admin-panel.html";
    } else {
        document.getElementById("error-message").innerText = "Incorrect password.";
    }
}

// Update Website Status
function updateSiteStatus() {
    const status = document.getElementById("siteStatus").value;
    if (status === "unavailable") {
        alert("Website is now set to unavailable.");
        // Show unavailable message or implement logic to set website as unavailable
        document.body.innerHTML = "<h1 id='unavailableMessage'>The website is currently unavailable. Please check back later!</h1>";
    } else {
        alert("Website is now available.");
        window.location.href = "index.html"; // Reload website as available
    }
}
