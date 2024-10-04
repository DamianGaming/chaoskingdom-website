// Store users and admin access in localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];
let websiteAvailable = JSON.parse(localStorage.getItem('websiteAvailable')) || true;

// Toggle website availability
function toggleWebsiteAvailability() {
    websiteAvailable = !websiteAvailable;
    localStorage.setItem('websiteAvailable', JSON.stringify(websiteAvailable));
    document.getElementById('admin-message').innerText = websiteAvailable ? 'Website is available' : 'Website is unavailable';
    updateWebsiteStatus();
}

// Update website status
function updateWebsiteStatus() {
    if (!websiteAvailable) {
        document.body.innerHTML = '<h1>Website is currently unavailable</h1><p>Come back later!</p>';
    }
}

// Sign Up a new user
document.getElementById('signup-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    let username = document.getElementById('signup-username').value;
    let password = document.getElementById('signup-password').value;
    let email = document.getElementById('signup-email').value;

    let user = { username, password, email, role: 'user' };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created successfully');
    window.location.href = 'login.html';
});

// Login user
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;

    let user = users.find(user => user.username === username && user.password === password);
    if (user) {
        if (user.role === 'admin') {
            window.location.href = 'admin-panel.html';
        } else {
            alert('Login successful');
        }
    } else {
        alert('Invalid login credentials');
    }
});

// Ban a user
function banUser() {
    let username = document.getElementById('ban-username').value;
    let user = users.find(user => user.username === username);
    if (user) {
        user.banned = true;
        localStorage.setItem('users', JSON.stringify(users));
        alert('User has been banned');
    } else {
        alert('User not found');
    }
}

// View users
function viewUsers() {
    let userList = document.getElementById('user-list');
    let userListDisplay = document.getElementById('user-list-display');
    userList.classList.toggle('hidden');

    userListDisplay.innerHTML = '';
    users.forEach(user => {
        let li = document.createElement('li');
        li.textContent = `${user.username} (${user.role}) ${user.banned ? ' [Banned]' : ''}`;
        userListDisplay.appendChild(li);
    });
}

// Automatically check website availability on load
document.addEventListener('DOMContentLoaded', function () {
    updateWebsiteStatus();
});
