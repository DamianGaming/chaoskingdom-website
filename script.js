document.addEventListener('DOMContentLoaded', () => {
    // Copy Server IP functionality
    const copyIPButton = document.querySelector('.btn-secondary');
    copyIPButton.addEventListener('click', () => {
        const serverIP = "23.26.247.227:26246";
        navigator.clipboard.writeText(serverIP).then(() => {
            alert(`Copied ${serverIP} to clipboard`);
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll-to-Top Button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});