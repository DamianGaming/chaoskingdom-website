// Admin login functionality
function loginAdmin() {
    const password = document.getElementById("admin-password").value;
    if (password === "yourAdminPassword") {
        localStorage.setItem("isAdminLoggedIn", true);
        window.location.href = "admin-panel.html";
    } else {
        document.getElementById("admin-login-message").textContent = "Incorrect password.";
    }
}

// Update website status
function updateWebsiteStatus() {
    const status = document.getElementById("website-status").value;
    localStorage.setItem("websiteStatus", status);
    document.getElementById("status-message").textContent = `Website is now ${status}`;
    checkWebsiteStatus();
}

// Check website status
function checkWebsiteStatus() {
    const status = localStorage.getItem("websiteStatus") || "available";
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

    if (status === "unavailable" && !isAdminLoggedIn) {
        document.body.innerHTML = `<div class="unavailable-message">
            <h1>Website Unavailable</h1>
            <p>The website is currently unavailable. Please try again later.</p>
            <button onclick="openAdminPage()" class="admin-login-btn">Admin Login</button>
        </div>`;
    }
}

// Tic-Tac-Toe game logic
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].textContent = currentPlayer;
        if (checkWin()) {
            document.getElementById("game-message").textContent = `${currentPlayer} Wins!`;
            gameActive = false;
        } else if (board.every(cell => cell !== "")) {
            document.getElementById("game-message").textContent = "It's a Draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    return winConditions.some(condition => {
        const [a, b, c] = condition;
        return board[a] === currentPlayer && board[a] === board[b] && board[a] === board[c];
    });
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
    document.getElementById("game-message").textContent = "";
}

// Admin page redirect
function openAdminPage() {
    window.location.href = "admin.html";
}

// Ban a user
function banUser() {
    const userIP = document.getElementById("ban-user-ip").value;
    const banMessage = document.getElementById("ban-message").value;
    localStorage.setItem(`banned_${userIP}`, banMessage);
    document.getElementById("ban-output").textContent = `User with IP ${userIP} is now banned.`;
}

// Display user logs
function displayUserLog() {
    const logList = document.getElementById("user-log-list");
    const log = JSON.parse(localStorage.getItem("userLog") || "[]");

    logList.innerHTML = log.map(entry => `<li>${entry}</li>`).join("");
}
