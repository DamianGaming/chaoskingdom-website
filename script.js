// Toggle Navigation for Mobile
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Copy IP Functionality
function copyIP() {
    const tempInput = document.createElement('input');
    tempInput.value = "23.26.247.227:26246";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("IP Copied: 23.26.247.227:26246");
}
