// Admin password (default)
let adminPassword = localStorage.getItem('adminPassword') || 'admin';
let websiteStatus = localStorage.getItem('websiteStatus') || 'available'; // Default to "available"
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
    applyWebsiteStatus();
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

// Apply Website Status (Available/Unavailable)
function applyWebsiteStatus() {
    if (websiteStatus === 'unavailable') {
        document.body.innerHTML = `<div style="display: flex; height: 100vh; align-items: center; justify-content: center; flex-direction: column;">
            <h1 style="font-size: 3rem; color: #ff8008;">Website Unavailable</h1>
            <p style="font-size: 1.5rem; color: #fff;">${maintenanceMessage || 'We are currently performing maintenance. Please check back later.'}</p>
        </div>`;
    }
}

// On page load
document.addEventListener('DOMContentLoaded', () => {
    // Apply website status only if it exists in localStorage, otherwise set it to available
    if (!localStorage.getItem('websiteStatus')) {
        localStorage.setItem('websiteStatus', 'available');
        websiteStatus = 'available';
    } else {
        websiteStatus = localStorage.getItem('websiteStatus');
    }

    applyWebsiteStatus(); // Apply the status of the website on load

    // Restore saved settings
    const savedStatus = localStorage.getItem('websiteStatus');
    if (savedStatus) {
        websiteStatus = savedStatus;
        const statusDropdown = document.getElementById('website-status');
        if (statusDropdown) {
            statusDropdown.value = websiteStatus;
        }
    }

    const savedMessage = localStorage.getItem('maintenanceMessage');
    if (savedMessage) {
        maintenanceMessage = savedMessage;
        const maintenanceMessageOutput = document.getElementById('maintenance-message-output');
        if (maintenanceMessageOutput) {
            maintenanceMessageOutput.textContent = maintenanceMessage;
        }
    }

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
