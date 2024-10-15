// Function to manually update all statuses
function updateStatus() {
    // Manually set each status here

    // Server status: 'Online' or 'Offline'
    const minecraftServerStatus = 'Online';

    // Website status: 'Online' or 'Offline'
    const websiteStatus = 'Offline';
    
    // User Panel status: 'Online', 'Offline', or 'Maintenance'
    const userPanelStatus = 'Offline';
    
    // Game modes status
    const survivalStatus = 'Online'; // 'Online' or 'Offline'
    const bedwarsStatus = 'Online'; // 'Online' or 'Offline'

    // Update the text in the HTML and the CSS class for color coding
    setStatus('server-status', minecraftServerStatus);
    setStatus('website-status', websiteStatus);
    setStatus('userpanel-status', userPanelStatus);
    setStatus('survival-status', survivalStatus);
    setStatus('bedwars-status', bedwarsStatus);

    // Update the last updated time
    document.getElementById('last-updated').innerText = new Date().toLocaleString();
}

// Helper function to set the status in the HTML
function setStatus(elementId, status) {
    const element = document.getElementById(elementId);
    element.innerText = status;
    element.classList.remove('online', 'offline', 'maintenance');

    // Add the appropriate class for color coding
    if (status === 'Online') {
        element.classList.add('online');
    } else if (status === 'Offline') {
        element.classList.add('offline');
    } else if (status === 'Maintenance') {
        element.classList.add('maintenance');
    }
}

// Call the updateStatus function to set initial values
updateStatus();
