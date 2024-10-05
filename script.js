// Reset localStorage and set website to available by default
window.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('websiteUnavailable')) {
        localStorage.setItem('websiteUnavailable', 'false'); // Defaults to available
    }

    // Check if the site is marked as unavailable
    if (localStorage.getItem('websiteUnavailable') === 'true') {
        showUnavailableMessage();
    }

    // Check if the admin is logged in
    if (localStorage.getItem('loggedIn') === 'true') {
        setupAdminFeatures();
    }
});

// Function to show the unavailable screen
function showUnavailableMessage() {
    document.body.innerHTML = `
        <div style="text-align: center; padding-top: 20%;">
            <h1 style="font-size: 3rem; color: #ff6600;">Website is Currently Unavailable</h1>
            <p style="color: #ffffff;">Please check back later.</p>
            <button id="admin-login" style="padding: 10px 20px; font-size: 1.2rem;">Admin Login</button>
        </div>
    `;
    document.getElementById('admin-login').addEventListener('click', function () {
        window.location.href = 'admin-login.html';
    });
}

// Admin panel functionality
function setupAdminFeatures() {
    const adminOptions = document.getElementById('admin-options');
    const toggleAvailabilityBtn = document.getElementById('toggle-availability');
    const logoutBtn = document.getElementById('logout-btn');

    if (toggleAvailabilityBtn) {
        toggleAvailabilityBtn.addEventListener('click', function () {
            const currentStatus = localStorage.getItem('websiteUnavailable');
            const newStatus = currentStatus === 'true' ? 'false' : 'true';
            localStorage.setItem('websiteUnavailable', newStatus);
            alert(`Website is now ${newStatus === 'true' ? 'unavailable' : 'available'}.`);
            window.location.reload();
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('isAdmin');
            window.location.reload();
        });
    }
}

// Admin login system
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            // Simulated login - Replace with real authentication as needed
            if (username === 'admin' && password === 'adminPassword') {
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('isAdmin', 'true');
                alert('Login successful!');
                window.location.href = 'admin.html'; // Redirect to admin page
            } else {
                alert('Incorrect login credentials!');
            }
        });
    }

    // Signup functionality
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const newUsername = document.getElementById('signup-username').value;
            const newPassword = document.getElementById('signup-password').value;
            const newEmail = document.getElementById('signup-email').value;

            // Simulated signup - You can save user data to a database in real applications
            alert(`Account created for ${newUsername}!`);
            window.location.href = 'index.html'; // Redirect to home page after signup
        });
    }

    // Profile dropdown
    const profileMenu = document.getElementById('profile-menu');
    if (localStorage.getItem('loggedIn') === 'true') {
        const profileName = document.getElementById('profile-name');
        profileName.textContent = 'Admin';

        const adminOptions = document.getElementById('admin-options');
        if (localStorage.getItem('isAdmin') === 'true') {
            adminOptions.style.display = 'block'; // Show admin options for admin
        }
        loginForm.style.display = 'none'; // Hide login form when logged in
    }

    // Profile dropdown functionality
    const profileDropdown = document.getElementById('profile-dropdown');
    if (profileDropdown) {
        profileDropdown.addEventListener('click', function () {
            document.getElementById('profile-options').classList.toggle('show');
        });
    }
});

// Reset all local storage (for testing purposes)
document.getElementById('reset-local-storage').addEventListener('click', function () {
    localStorage.clear();
    window.location.reload();
});

// Activity tracking (Example: log users viewing the website)
window.onload = function () {
    const userVisitCount = localStorage.getItem('userVisitCount') || 0;
    localStorage.setItem('userVisitCount', parseInt(userVisitCount) + 1);

    // Example log output for admin (this would typically be handled by a backend in production)
    console.log(`User has visited ${userVisitCount} times.`);
};

// Ban user feature (simulated)
function banUser(username) {
    localStorage.setItem(`ban-${username}`, 'true');
    alert(`User ${username} has been banned.`);
}

function checkIfBanned(username) {
    return localStorage.getItem(`ban-${username}`) === 'true';
}

// Check if the current user is banned
const currentUser = 'exampleUser'; // Replace with the real logged-in user
if (checkIfBanned(currentUser)) {
    document.body.innerHTML = `
        <div style="text-align: center; padding-top: 20%;">
            <h1 style="font-size: 3rem; color: #ff6600;">Access Denied</h1>
            <p style="color: #ffffff;">You have been banned from accessing this website.</p>
        </div>
    `;
}
