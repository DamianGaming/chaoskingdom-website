// Dark Mode Toggle
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        body.style.background = "linear-gradient(135deg, #2c3e50, #4ca1af)";
        body.style.color = "white";
    } else {
        body.style.background = "linear-gradient(135deg, #FF7E5F, #FD3A69)";
        body.style.color = "black";
    }
}

// Language Change Function
function changeLanguage(language) {
    if (language === 'es') {
        document.querySelector('h1').innerText = 'Bienvenido a ChaosKingdom';
        document.querySelector('button').innerText = 'Únete Ahora';
        document.getElementById('ip').innerText = 'Dirección IP: 23.26.247.227:26246';
    } else if (language === 'fr') {
        document.querySelector('h1').innerText = 'Bienvenue à ChaosKingdom';
        document.querySelector('button').innerText = 'Rejoignez Maintenant';
        document.getElementById('ip').innerText = 'Adresse IP: 23.26.247.227:26246';
    } else {
        document.querySelector('h1').innerText = 'Welcome to ChaosKingdom';
        document.querySelector('button').innerText = 'Join Now!';
        document.getElementById('ip').innerText = 'Server IP: 23.26.247.227:26246';
    }
}

// Copy IP Address to Clipboard
function copyToClipboard() {
    const ip = '23.26.247.227:26246';
    navigator.clipboard.writeText(ip);
    alert('IP copied to clipboard!');
}

// Toggle Mobile Nav
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}
