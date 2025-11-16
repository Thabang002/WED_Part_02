const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active'); // animate hamburger
            });

            //DATE STAMP
               function displayDate() {
                const today = new Date();
                document.getElementById("year").textContent = today.getFullYear();

                const dateStr = today.toDateString(); // e.g., 'Fri Oct 11 2025'
                document.getElementById("datestamp").innerHTML = `Today's Date: ${dateStr}`;
            }
            
                displayDate();
                setInterval(displayDate, 86400000); // Update every 24 hours

                // Time Stamp
                function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const  seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
     
    document.getElementById("timestamp").innerHTML = `Current Time: ${hours}:${minutes}:${seconds} ${ampm}`;
                }
                updateClock();          
                setInterval(updateClock, 1000); // Update every second


// Form Validation



// Login Form Validation
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

// Register Form Validation form

const registerForm = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

registerForm.addEventListener("submit", (e) => {
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
