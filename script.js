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
