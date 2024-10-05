document.addEventListener('DOMContentLoaded', () => {
    // Check if a user is logged in
    const currentUser = localStorage.getItem('user');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        alert(`Welcome back, ${user.username}!`);
        window.location.href = 'about.html';
    }

    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            loginUser(email, password);
        });
    }

    // Signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            signUpUser(username, email, password);
        });
    }
});

function loginUser(email, password) {
    // Simulate a login request (can be replaced with actual backend call)
    if (email === 'admin@chaoskingdom.com' && password === 'adminpassword') {
        localStorage.setItem('user', JSON.stringify({ email, role: 'admin', username: 'Admin' }));
        window.location.href = 'about.html';
    } else {
        alert('Invalid login details');
    }
}

function signUpUser(username, email, password) {
    localStorage.setItem('user', JSON.stringify({ username, email, role: 'user' }));
    alert('Sign-up successful! Redirecting to login page.');
    window.location.href = 'login.html';
}
