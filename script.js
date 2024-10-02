// Admin login functionality
function loginAdmin() {
    const password = document.getElementById("admin-password").value;
    if (password === "yourAdminPassword") {  // Update with your actual admin password
        localStorage.setItem("isAdminLoggedIn", true);
        window.location.href = "admin-panel.html";
    } else {
        document.getElementById("admin-login-message").textContent = "Incorrect password.";
    }
}

// Update website availability
function updateWebsiteStatus() {
    const status = document.getElementById("website-status").value;
    localStorage.setItem("websiteStatus", status);
    document.getElementById("status-message").textContent = `Website is now ${status}`;
    checkWebsiteStatus();  // Check website status after update
}

// Check if the website should be available or unavailable
function checkWebsiteStatus() {
    const status = localStorage.getItem("websiteStatus") || "available";
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

    if (status === "unavailable" && !isAdminLoggedIn) {
        document.body.innerHTML = `<div class="unavailable-message">
            <h1>Website Unavailable</h1>
            <p>The website is currently unavailable. Please try again later.</p>
            <button onclick="openAdminPage()" class="admin-login-btn">Admin Login</button>
        </div>`;
    }
}

// Make sure the admin page opens for logged-in users
function openAdminPage() {
    window.location.href = "admin.html";
}

// Update maintenance message
function updateMaintenanceMessage() {
    const message = document.getElementById("maintenance-message").value;
    localStorage.setItem("maintenanceMessage", message);
    document.getElementById("maintenance-message-output").textContent = message;
}

// Copy server IP to clipboard
function copyIP() {
    const ip = "23.26.247.227:26246";
    navigator.clipboard.writeText(ip).then(() => {
        alert("IP Address copied to clipboard!");
    });
}

// Log user visits
function logUserVisit() {
    const userIP = getUserIP();  // Get mock user IP
    let userLog = JSON.parse(localStorage.getItem("userLog")) || [];
    if (!userLog.includes(userIP)) {
        userLog.push(userIP);
        localStorage.setItem("userLog", JSON.stringify(userLog));
    }
    displayUserLog();
}

// Display user logs
function displayUserLog() {
    const userLog = JSON.parse(localStorage.getItem("userLog")) || [];
    const userLogList = document.getElementById("user-log-list");
    userLogList.innerHTML = '';
    userLog.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        userLogList.appendChild(li);
    });
}

// Ban a user
function banUser() {
    const userIP = document.getElementById("ban-user-ip").value;
    const banMessage = document.getElementById("ban-message").value;
    let bannedUsers = JSON.parse(localStorage.getItem("bannedUsers")) || {};
    bannedUsers[userIP] = banMessage;
    localStorage.setItem("bannedUsers", JSON.stringify(bannedUsers));
    document.getElementById("ban-output").textContent = `User ${userIP} has been banned.`;
}

// Check if the user is banned
function checkBannedStatus() {
    const userIP = getUserIP();
    const bannedUsers = JSON.parse(localStorage.getItem("bannedUsers")) || {};
    if (bannedUsers[userIP]) {
        document.body.innerHTML = `<div class="ban-message">
            <h1>You are banned from this website</h1>
            <p>${bannedUsers[userIP]}</p>
        </div>`;
    }
}

// Mock user IP for demo purposes
function getUserIP() {
    return "192.168.1.1";  // Replace with actual user IP retrieval in a real environment
}

// Initialize the page on load
window.onload = function () {
    checkWebsiteStatus();
    logUserVisit();
    checkBannedStatus();
};
