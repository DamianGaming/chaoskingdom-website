// Login Function
function loginUser(email, password) {
    // Admin login logic
    if (email === 'admin@chaoskingdom.com' && password === 'adminpassword') {
        localStorage.setItem('user', JSON.stringify({ email, role: 'admin', username: 'Admin' }));
        alert('Welcome Admin!');
        window.location.href = 'about.html';
    } else {
        // Regular user login
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email && user.password === password) {
            alert('Welcome ' + user.username);
            window.location.href = 'about.html';
        } else {
            alert('Invalid login credentials');
        }
    }
}

// Sign Up Function
function signUpUser(username, email, password) {
    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify({ username, email, password, role: 'user' }));
    alert('Sign-up successful! Redirecting to login page.');
    window.location.href = 'login.html';
}

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    loginUser(email, password);
});

// Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signUpUser(username, email, password);
});
