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

// Toggle login/signup forms
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');

const loginForm = document.createElement('div');
loginForm.classList.add('login-form');
loginForm.innerHTML = `
    <h2>Login</h2>
    <input type="text" id="login-username" placeholder="Username" required>
    <input type="password" id="login-password" placeholder="Password" required>
    <button type="submit" id="login-submit">Login</button>
`;
document.body.appendChild(loginForm);

const signupForm = document.createElement('div');
signupForm.classList.add('signup-form');
signupForm.innerHTML = `
    <h2>Sign Up</h2>
    <input type="text" id="signup-username" placeholder="Username" required>
    <input type="password" id="signup-password" placeholder="Password" required>
    <input type="email" id="signup-email" placeholder="Email" required>
    <button type="submit" id="signup-submit">Sign Up</button>
`;
document.body.appendChild(signupForm);

// Toggle forms visibility
loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('show');
    signupForm.classList.remove('show');
});

signupBtn.addEventListener('click', () => {
    signupForm.classList.toggle('show');
    loginForm.classList.remove('show');
});

// Dummy user data for demo (replace with actual implementation)
const users = JSON.parse(localStorage.getItem('users')) || [{username: "admin", password: "admin", role: "admin"}];

// Login Functionality
document.getElementById('login-submit')?.addEventListener('click', function (e) {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        if (user.role === 'admin') {
            window.location.href = 'admin-panel.html'; // Admin gets redirected to admin panel
        } else {
            alert('Login successful');
        }
    } else {
        alert('Invalid credentials');
    }
});

// Sign Up Functionality
document.getElementById('signup-submit')?.addEventListener('click', function (e) {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const email = document.getElementById('signup-email').value;

    const newUser = { username, password, email, role: 'user' };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful');
});
