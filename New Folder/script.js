const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    let valid = true;

    // Reset errors
    clearError(username);
    clearError(password);

    // Username validation
    if (username.value.trim() === "") {
        showError(username, "Username cannot be empty");
        valid = false;
    }

    // Password validation
    if (password.value.trim() === "") {
        showError(password, "Password cannot be empty");
        valid = false;
    } else if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
        valid = false;
    }

    // If valid, simulate login
    if (valid) {
        alert("Login successful!");
        form.reset();
    }
});

// Helper functions
function showError(input, message) {
    const small = input.parentElement.querySelector("small");
    small.textContent = message;
    small.style.display = "block";
    input.classList.add("error-input");
}

function clearError(input) {
    const small = input.parentElement.querySelector("small");
    small.textContent = "";
    small.style.display = "none";
    input.classList.remove("error-input");
}
