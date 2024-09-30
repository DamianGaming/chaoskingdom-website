let adminPassword = "FuckMeBitch12!"; // Default admin password

// Admin Login
function loginAdmin() {
    const enteredPassword = document.getElementById('admin-password').value;
    const messageBox = document.getElementById('admin-login-message');
    const adminTools = document.getElementById('admin-tools');

    if (enteredPassword === adminPassword) {
        messageBox.textContent = "Login successful!";
        adminTools.style.display = "block";
    } else {
        messageBox.textContent = "Incorrect password.";
    }
}

// Update Website Status
function updateWebsiteStatus() {
    const status = document.getElementById('website-status').value;
    const statusMessage = document.getElementById('status-message');
    
    if (status === 'available') {
        statusMessage.textContent = "Website is now available.";
        document.body.style.filter = "none";
    } else {
        statusMessage.textContent = "Website is now unavailable.";
        document.body.style.filter = "blur(5px)";
    }
}

// Update Maintenance Message
function updateMaintenanceMessage() {
    const maintenanceMessage = document.getElementById('maintenance-message').value;
    const maintenanceOutput = document.getElementById('maintenance-message-output');

    maintenanceOutput.textContent = maintenanceMessage || "No maintenance message set.";
}

// Change Admin Password
function changeAdminPassword() {
    const newPassword = document.getElementById('new-admin-password').value;
    const passwordMessage = document.getElementById('password-message');

    if (newPassword) {
        adminPassword = newPassword;
        passwordMessage.textContent = "Password changed successfully!";
    } else {
        passwordMessage.textContent = "Please enter a new password.";
    }
}

// Accessibility Features
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function decreaseFontSize() {
    document.body.style.fontSize = "smaller";
}

function changeLanguage() {
    alert("Language changed.");
}
