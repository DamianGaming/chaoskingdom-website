// Admin password (default)
let adminPassword = localStorage.getItem('adminPassword') || 'admin';
let websiteStatus = localStorage.getItem('websiteStatus') || 'available';
let maintenanceMessage = localStorage.getItem('maintenanceMessage') || '';

// Admin login function
function loginAdmin() {
    const inputPassword = document.getElementById('admin-password').value;
    if (inputPassword === adminPassword) {
        window.location.href = 'admin-panel.html';
    } else {
        document.getElementById('admin-login-message').textContent = 'Incorrect password!';
    }
}

// Update Website Status
function updateWebsiteStatus() {
    const status = document.getElementById('website-status').value;
    websiteStatus = status;
    localStorage.setItem('websiteStatus', websiteStatus);
    document.getElementById('status-message').textContent = "Website status updated to " + websiteStatus;
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
        const statusDropdown = document.getElementById('website-status');
        if (statusDropdown) {
            statusDropdown.value = websiteStatus;
        }
    }

    // Restore maintenance message
    const savedMessage = localStorage.getItem('maintenanceMessage');
    if (savedMessage) {
        maintenanceMessage = savedMessage;
        const maintenanceMessageOutput = document.getElementById('maintenance-message-output');
        if (maintenanceMessageOutput) {
            maintenanceMessageOutput.textContent = maintenanceMessage;
        }
    }

    // Restore admin password
    const savedAdminPassword = localStorage.getItem('adminPassword');
    if (savedAdminPassword) {
        adminPassword = savedAdminPassword;
    }
});

// Copy IP address function for "Join Now" button
function copyIP() {
    const ip = '23.26.247.227:26246';
    navigator.clipboard.writeText(ip).then(() => {
        alert('IP Address copied to clipboard!');
    });
}

// Open admin page
function openAdminPage() {
    window.location.href = 'admin.html';
}
