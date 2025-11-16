const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // Reset all errors
    clearError(nameInput);
    clearError(emailInput);
    clearError(passwordInput);
    clearError(confirmPasswordInput);

    // Validate name
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name cannot be empty");
        valid = false;
    }

    // Validate email
    if (emailInput.value.trim() === "") {
        showError(emailInput, "Email cannot be empty");
        valid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, "Enter a valid email");
        valid = false;
    }

    // Validate password
    if (passwordInput.value.trim() === "") {
        showError(passwordInput, "Password cannot be empty");
        valid = false;
    } else if (passwordInput.value.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
        valid = false;
    }

    // Validate confirm password
    if (confirmPasswordInput.value.trim() === "") {
        showError(confirmPasswordInput, "Please confirm your password");
        valid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match");
        valid = false;
    }

    // If valid, simulate registration
    if (valid) {
        alert("Registration successful!");
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

function isValidEmail(email) {
    // Basic email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
