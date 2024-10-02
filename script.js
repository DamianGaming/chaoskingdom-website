function loginAdmin() {
    const password = document.getElementById("admin-password").value;
    if (password === "Admin32") {  // replace "yourAdminPassword" with your actual password
        window.location.href = "admin-panel.html";
    } else {
        document.getElementById("admin-login-message").textContent = "Incorrect password.";
    }
}

function updateWebsiteStatus() {
    const status = document.getElementById("website-status").value;
    localStorage.setItem("websiteStatus", status);
    checkWebsiteStatus();
}

function checkWebsiteStatus() {
    const status = localStorage.getItem("websiteStatus") || "available";
    const statusMessage = document.getElementById("status-message");
    if (status === "unavailable") {
        statusMessage.textContent = "The website is currently unavailable.";
        document.body.innerHTML = `<h1>Website Unavailable</h1><button onclick="openAdminPage()">Admin Login</button>`;
    } else {
        statusMessage.textContent = "The website is available.";
    }
}

window.onload = function () {
    checkWebsiteStatus();
    logUserVisit();
    checkBannedStatus();
};

function updateMaintenanceMessage() {
    const message = document.getElementById("maintenance-message").value;
    localStorage.setItem("maintenanceMessage", message);
    document.getElementById("maintenance-message-output").textContent = message;
}

function copyIP() {
    const ip = "23.26.247.227:26246";
    navigator.clipboard.writeText(ip).then(() => {
        alert("IP Address copied to clipboard!");
    });
}

function openAdminPage() {
    window.location.href = "admin.html";
}

// Logging visitors
function logUserVisit() {
    const userIP = getUserIP();
    let userLog = JSON.parse(localStorage.getItem("userLog")) || [];
    if (!userLog.includes(userIP)) {
        userLog.push(userIP);
        localStorage.setItem("userLog", JSON.stringify(userLog));
    }
    displayUserLog();
}

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

// Ban user functionality
function banUser() {
    const userIP = document.getElementById("ban-user-ip").value;
    const banMessage = document.getElementById("ban-message").value;
    let bannedUsers = JSON.parse(localStorage.getItem("bannedUsers")) || {};
    bannedUsers[userIP] = banMessage;
    localStorage.setItem("bannedUsers", JSON.stringify(bannedUsers));
    document.getElementById("ban-output").textContent = `User ${userIP} has been banned.`;
}

function checkBannedStatus() {
    const userIP = getUserIP();
    const bannedUsers = JSON.parse(localStorage.getItem("bannedUsers")) || {};
    if (bannedUsers[userIP]) {
        document.body.innerHTML = `<h1>You are banned from this website</h1><p>${bannedUsers[userIP]}</p>`;
    }
}

function getUserIP() {
    // For now, we'll use a mock IP address for testing purposes.
    // In a live environment, you'd need to fetch the user's real IP.
    return "192.168.1.1";  // Mock IP for testing
}
