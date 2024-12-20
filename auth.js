// auth.js - Handles user authentication

// Check if the user is logged in
function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

// Login function
function loginUser(email, password) {
    const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage
    if (user && user.email === email && user.password === password) {
        localStorage.setItem('loggedIn', 'true'); // Mark the user as logged in
        return true;
    }
    return false;
}

// Logout function
function logoutUser() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html'; // Redirect to login page
}
