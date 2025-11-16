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