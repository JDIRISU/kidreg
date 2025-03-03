
// Sample credentials (You can replace this with an actual authentication system)
const validUsername = "admin";
const validPassword = "pass123";

// Login validation function
function login() {
    // Get values from the input fields
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Check if the entered credentials match the predefined ones
    if (username === validUsername && password === validPassword) {
        // Redirect to the dashboard
        document.getElementById("errorMessage").style.display = "none";
        window.location.href = "pages/dashboard.html";
    } else {
        // Display error message
        document.getElementById("errorMessage").style.display = "block";
    }
}

function toggleMenu() {
    document.querySelector('.nav-wrap').classList.toggle('open');
}

function logout() {
    window.location.href = "../index.html";
}

function showForm() {
    // Hide all forms
    document.getElementById("fatherForm").style.display = "none";
    document.getElementById("motherForm").style.display = "none";
    document.getElementById("bothForm").style.display = "none";
    document.getElementById("guardianForm").style.display = "none";

    // Get selected value
    var selectedOption = document.getElementById("pickupOption").value;

    // Show corresponding form
    if (selectedOption === "father") {
        document.getElementById("fatherForm").style.display = "block";
    } else if (selectedOption === "mother") {
        document.getElementById("motherForm").style.display = "block";
    } else if (selectedOption === "both") {
        document.getElementById("bothForm").style.display = "block";
    } else if (selectedOption === "guardian") {
        document.getElementById("guardianForm").style.display = "block";
    }
}