let adminPassword = "FuckMeBitch12!";
let websiteStatus = "available";
let maintenanceMessage = "";

// Admin Login
function loginAdmin() {
    const enteredPassword = document.getElementById('admin-password').value;
    const messageBox = document.getElementById('admin-login-message');

    if (enteredPassword === adminPassword) {
        messageBox.textContent = "Login successful!";
        window.location.href = "admin-panel.html";
    } else {
        messageBox.textContent = "Incorrect password.";
    }
}

// Update Website Status
function updateWebsiteStatus() {
    const status = document.getElementById('website-status').value;
    const statusMessage = document.getElementById('status-message');
    websiteStatus = status;
    localStorage.setItem('websiteStatus', websiteStatus);
    statusMessage.textContent = "Website status updated to " + websiteStatus;
}

// Update Maintenance Message
function updateMaintenanceMessage() {
    const message = document.getElementById('maintenance-message').value;
    maintenanceMessage = message;
    localStorage.setItem('maintenanceMessage', maintenanceMessage);
    document.getElementById('maintenance-message-output').textContent = maintenanceMessage;
}

// Change Admin Password
function changeAdminPassword() {
    const newPassword = document.getElementById('new-admin-password').value;
    if (newPassword) {
        adminPassword = newPassword;
        localStorage.setItem('adminPassword', adminPassword);
        document.getElementById('password-message').textContent = "Password updated successfully!";
    }
}

// Restore saved settings
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
});
