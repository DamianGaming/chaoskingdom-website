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

// Store Admin Password Securely
let adminPassword = localStorage.getItem('adminPassword') || 'admin123'; // Default password

// Admin Login Function
function adminLogin() {
    const password = document.getElementById("adminPassword").value;
    if (password === adminPassword) {
        window.location.href = "admin-panel.html";
    } else {
        document.getElementById("error-message").innerText = "Incorrect password.";
    }
}

// Change Admin Password
function changeAdminPassword() {
    const newPassword = document.getElementById("newAdminPassword").value;
    if (newPassword.length >= 6) {
        adminPassword = newPassword;
        localStorage.setItem('adminPassword', adminPassword);
        alert("Password updated successfully!");
    } else {
        alert("Password must be at least 6 characters long.");
    }
}

// Update Website Status (Maintenance or Available)
function updateSiteStatus() {
    const status = document.getElementById("siteStatus").value;
    if (status === "unavailable") {
        const maintenanceMessage = localStorage.getItem("maintenanceMessage") || "The website is currently under maintenance. Please check back later!";
        document.body.innerHTML = `<h1>${maintenanceMessage}</h1>`;
        alert("Website is now in maintenance mode.");
    } else {
        window.location.href = "index.html"; // Redirect to homepage
        alert("Website is now available.");
    }
}

// Update Maintenance Mode Message
function updateMaintenanceMessage() {
    const message = document.getElementById("maintenanceMessage").value;
    if (message) {
        localStorage.setItem("maintenanceMessage", message);
        alert("Maintenance message updated.");
    } else {
        alert("Please enter a maintenance message.");
    }
}

// Accessibility Toggle Functions for Admin Control
function toggleDarkModeAccessibility() {
    const darkModeAccess = document.getElementById('toggleDarkModeAccess').checked;
    localStorage.setItem('darkModeAccess', darkModeAccess);
    alert(darkModeAccess ? "Dark mode option enabled for users." : "Dark mode option disabled for users.");
}

function toggleFontSizeAccessibility() {
    const fontSizeAccess = document.getElementById('toggleFontSizeAccess').checked;
    localStorage.setItem('fontSizeAccess', fontSizeAccess);
    alert(fontSizeAccess ? "Font size adjustment enabled for users." : "Font size adjustment disabled for users.");
}

// Font Size Decrease (updated for Admin Control)
function decreaseFontSize() {
    if (localStorage.getItem('fontSizeAccess') === 'true') {
        document.body.style.fontSize = "14px";
    } else {
        alert("Font size adjustment is disabled.");
    }
}

// Dark Mode Toggle (updated for Admin Control)
function toggleDarkMode() {
    if (localStorage.getItem('darkModeAccess') === 'true') {
        document.body.classList.toggle("dark-mode");
    } else {
        alert("Dark mode is disabled by admin.");
    }
}
