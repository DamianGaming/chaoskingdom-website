let adminPassword = "FuckMeBitch12!"; // Default admin password
let websiteStatus = "available"; // Default website status
let maintenanceMessage = "";

// Admin Login
function loginAdmin() {
    const enteredPassword = document.getElementById('admin-password').value;
    const messageBox = document.getElementById('admin-login-message');
    const adminTools = document.getElementById('admin-tools');

    if (enteredPassword === adminPassword) {
        messageBox.textContent = "Login successful!";
        adminTools.style.display = "block"; // Show admin tools on successful login
        localStorage.setItem('adminLoggedIn', true); // Save login state
    } else {
        messageBox.textContent = "Incorrect password."; // Show error message for incorrect password
    }
}

// Update Website Status
function updateWebsiteStatus() {
    const status = document.getElementById('website-status').value;
    const statusMessage = document.getElementById('status-message');

    websiteStatus = status; // Update the website status
    localStorage.setItem('websiteStatus', websiteStatus); // Save status

    if (status === 'available') {
        statusMessage.textContent = "Website is now available.";
    } else {
        statusMessage.textContent = "Website is now unavailable.";
    }
}

// Update Maintenance Message
function updateMaintenanceMessage() {
    const maintenanceInput = document.getElementById('maintenance-message').value;
    maintenanceMessage = maintenanceInput; // Update the maintenance message
    localStorage.setItem('maintenanceMessage', maintenanceMessage); // Save message

    const maintenanceOutput = document.getElementById('maintenance-message-output');
    maintenanceOutput.textContent = maintenanceMessage || "No maintenance message set.";
}

// Change Admin Password
function changeAdminPassword() {
    const newPassword = document.getElementById('new-admin-password').value;
    const passwordMessage = document.getElementById('password-message');

    if (newPassword) {
        adminPassword = newPassword; // Set the new admin password
        localStorage.setItem('adminPassword', adminPassword); // Save new password
        passwordMessage.textContent = "Password changed successfully!";
    } else {
        passwordMessage.textContent = "Please enter a new password.";
    }
}

// Restore saved settings from localStorage
document.addEventListener('DOMContentLoaded', () => {
    // Restore website status
    const savedStatus = localStorage.getItem('websiteStatus');
    if (savedStatus) {
        websiteStatus = savedStatus;
        document.getElementById('website-status').value = websiteStatus;
    }

    // Restore maintenance message
    const savedMessage = localStorage.getItem('maintenanceMessage');
    if (savedMessage) {
        maintenanceMessage = savedMessage;
        document.getElementById('maintenance-message-output').textContent = maintenanceMessage;
    }

    // Restore admin password
    const savedAdminPassword = localStorage.getItem('adminPassword');
    if (savedAdminPassword) {
        adminPassword = savedAdminPassword;
    }

    // Restore login state
    if (localStorage.getItem('adminLoggedIn')) {
        document.getElementById('admin-tools').style.display = 'block';
    }
});
