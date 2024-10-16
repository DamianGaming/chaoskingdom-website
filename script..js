// Function to manually update all statuses
function updateStatus() {
    // Set each status manually here
    const minecraftServerStatus = 'Online'; // 'Online' or 'Offline'
    const websiteStatus = 'Unavailable'; // 'Unavailable' or 'Online'
    const survivalStatus = 'Online'; // 'Online' or 'Offline'
    const bedwarsStatus = 'Online'; // 'Online' or 'Offline'

    // Update the text in the HTML and the CSS class for color coding
    setStatus('server-status', minecraftServerStatus);
    setStatus('website-status', websiteStatus);
    setStatus('survival-status', survivalStatus);
    setStatus('bedwars-status', bedwarsStatus);

    // Update the last updated time
    document.getElementById('last-updated').innerText = new Date().toLocaleString();
}

// Helper function to set the status in the HTML
function setStatus(elementId, status) {
    const element = document.getElementById(elementId);
    element.innerText = status;
    element.classList.remove('online', 'offline');

    // Add the appropriate class for color coding
    if (status === 'Online') {
        element.classList.add('online');
    } else if (status === 'Unavailable' || status === 'Offline') {
        element.classList.add('offline');
    }
}

// Call the updateStatus function to set initial values
updateStatus();
