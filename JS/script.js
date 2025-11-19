// =========================
// HAMBURGER MENU
// =========================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});


// =========================
// DATE STAMP
// =========================
function displayDate() {
    const today = new Date();
    document.getElementById("year").textContent = today.getFullYear();

    const dateStr = today.toDateString(); 
    document.getElementById("datestamp").innerHTML = `Today's Date: ${dateStr}`;
}

displayDate();
setInterval(displayDate, 86400000); // Update every 24 hours


// =========================
// TIME STAMP
// =========================
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    document.getElementById("timestamp").innerHTML = 
        `Current Time: ${hours}:${minutes}:${seconds} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);


// =========================
// UNIVERSAL VALIDATION HELPERS
// =========================
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
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// =========================
// LOGIN FORM VALIDATION
// =========================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    const loginUser = document.getElementById("username");
    const loginPass = document.getElementById("password");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let valid = true;
        clearError(loginUser);
        clearError(loginPass);

        if (loginUser.value.trim() === "") {
            showError(loginUser, "Username cannot be empty");
            valid = false;
        }

        if (loginPass.value.trim() === "") {
            showError(loginPass, "Password cannot be empty");
            valid = false;
        } else if (loginPass.value.length < 6) {
            showError(loginPass, "Password must be at least 6 characters");
            valid = false;
        }

        if (valid) {
            alert("Login successful!");
            location.reload(); // PAGE REFRESH
        }
    });
}


// =========================
// REGISTRATION FORM VALIDATION
// =========================
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    const regName = document.getElementById("name");
    const regEmail = document.getElementById("email");
    const regPass = document.getElementById("regPassword");
    const regConfirm = document.getElementById("confirmPassword");

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let valid = true;
        clearError(regName);
        clearError(regEmail);
        clearError(regPass);
        clearError(regConfirm);

        // Name
        if (regName.value.trim() === "") {
            showError(regName, "Name cannot be empty");
            valid = false;
        }

        // Email
        if (!isValidEmail(regEmail.value)) {
            showError(regEmail, "Enter a valid email");
            valid = false;
        }

        // Password
        if (regPass.value.length < 6) {
            showError(regPass, "Password must be at least 6 characters");
            valid = false;
        }

        // Confirm password
        if (regConfirm.value !== regPass.value) {
            showError(regConfirm, "Passwords do not match");
            valid = false;
        }

        if (valid) {
            alert("Registration successful!");
            location.reload(); // PAGE REFRESH
        }
    });
}


// =========================
// EMAIL SUBSCRIPTION FORM
// =========================
const subscribeForm = document.getElementById("subscribeForm");
const subscribeEmail = document.getElementById("subscribeEmail");

if (subscribeForm) {
    subscribeForm.addEventListener("submit", (e) => {
        e.preventDefault();

        clearError(subscribeEmail);

        if (!isValidEmail(subscribeEmail.value)) {
            showError(subscribeEmail, "Enter a valid email");
        } else {
            alert("Subscription successful!");
            location.reload(); // PAGE REFRESH
        }
    });
}

// ===== FOOTER EMAIL SIGN-IN FORM VALIDATION =====
const footerForm = document.getElementById("footerSignInForm");
const footerEmail = document.getElementById("footerEmail");
const footerPassword = document.getElementById("footerPassword");
const footerSuccess = document.getElementById("footerSuccess");

footerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    clearFooterErrors();

    let valid = true;

    // EMAIL VALIDATION
    if (footerEmail.value.trim() === "") {
        showFooterError(footerEmail, "Email is required");
        valid = false;
    } else if (!validateEmail(footerEmail.value)) {
        showFooterError(footerEmail, "Please enter a valid email");
        valid = false;
    }

    // PASSWORD VALIDATION
    if (footerPassword.value.trim() === "") {
        showFooterError(footerPassword, "Password is required");
        valid = false;
    } else if (footerPassword.value.length < 6) {
        showFooterError(footerPassword, "Minimum 6 characters required");
        valid = false;
    }

    if (valid) {
        footerSuccess.textContent = "Signed in successfully!";
        footerSuccess.style.display = "block";
        footerForm.reset();
    }
});

// Helper Functions
function showFooterError(input, msg) {
    const small = input.nextElementSibling;
    small.textContent = msg;
    small.style.display = "block";
    input.style.borderColor = "red";
}

function clearFooterErrors() {
    document.querySelectorAll(".footer-signin .error-message").forEach(err => {
        err.style.display = "none";
    });

    document.querySelectorAll(".footer-signin input").forEach(input => {
        input.style.borderColor = "#ccc";
    });

    footerSuccess.style.display = "none";
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
