let adminPassword = "yourpassword"; // Default admin password

// Admin Login
function loginAdmin() {
    const enteredPassword = document.getElementById('admin-password').value;
    const messageBox = document.getElementById('admin-login-message');
    const adminTools = document.getElementById('admin-tools');

    if (enteredPassword === adminPassword) {
        messageBox.textContent = "Login successful!";
        adminTools.style.display = "block"; // Show admin tools on successful login
    } else {
        messageBox.textContent = "Incorrect password."; // Show error message for incorrect password
    }
}

// Update Website Status
function updateWebsiteStatus() {
    const status = document.getElementById('website-status').value;
    const statusMessage = document.getElementById('status-message');

    if (status === 'available') {
        statusMessage.textContent = "Website is now available.";
        // You may want to add logic here to actually set the website status
    } else {
        statusMessage.textContent = "Website is now unavailable.";
        // You may want to add logic here to actually set the website status
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
        adminPassword = newPassword; // Set the new admin password
        passwordMessage.textContent = "Password changed successfully!";
    } else {
        passwordMessage.textContent = "Please enter a new password.";
    }
}

// Accessibility Features
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode"); // Toggle dark mode class for the body
}

function decreaseFontSize() {
    let currentSize = window.getComputedStyle(document.body).fontSize; // Get the current font size
    let newSize = parseFloat(currentSize) - 2; // Decrease the font size by 2px
    document.body.style.fontSize = newSize + "px"; // Apply the new font size
}

function changeLanguage() {
    alert("Language changed."); // Placeholder for language change functionality
}

// Open Admin Page function
function openAdminPage() {
    window.location.href = "admin.html"; // Redirect to the admin page
}
