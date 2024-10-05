// User data management
const users = JSON.parse(localStorage.getItem('users')) || [
    { username: "admin", password: "admin", role: "admin" }
];

// Toggle login/signup forms
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Show/Hide Login Form
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        loginForm.classList.toggle('show');
        signupForm.classList.remove('show');
    });
}

// Show/Hide Signup Form
if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        signupForm.classList.toggle('show');
        loginForm.classList.remove('show');
    });
}

// Login Functionality
if (document.getElementById('login-submit')) {
    document.getElementById('login-submit').addEventListener('click', function (e) {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
            if (user.role === 'admin') {
                window.location.href = 'admin-panel.html'; // Redirect to admin panel
            } else {
                alert('Login successful');
            }
        } else {
            alert('Invalid login credentials');
        }
    });
}

// Signup Functionality
if (document.getElementById('signup-submit')) {
    document.getElementById('signup-submit').addEventListener('click', function (e) {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        const email = document.getElementById('signup-email').value;

        const newUser = { username, password, email, role: 'user' };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup successful');
    });
}

// Admin Panel Toggle Website Availability
if (document.getElementById('toggle-availability')) {
    document.getElementById('toggle-availability').addEventListener('click', function () {
        const isUnavailable = localStorage.getItem('websiteUnavailable') === 'true';
        if (isUnavailable) {
            localStorage.setItem('websiteUnavailable', 'false');
            alert('Website is now available.');
        } else {
            localStorage.setItem('websiteUnavailable', 'true');
            alert('Website is now unavailable.');
        }
        window.location.reload();
    });
}

// Checking if website is unavailable
window.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('websiteUnavailable') === null) {
        localStorage.setItem('websiteUnavailable', 'false'); // Default to available
    }
    
    if (localStorage.getItem('websiteUnavailable') === 'true') {
        document.body.innerHTML = `
            <div style="text-align: center; padding-top: 20%;">
                <h1 style="font-size: 3rem; color: #ff6600;">Website is Currently Unavailable</h1>
                <p style="color: #ffffff;">Please check back later.</p>
            </div>
        `;
    }
});
