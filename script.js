document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    function updateCountdown() {
        const eventDate = new Date("March 30, 2025 00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s left`;

        if (timeLeft < 0) {
            document.getElementById("countdown").innerHTML = "Event has started!";
        }
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // RSVP Form Submission
    document.getElementById("rsvpForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name && email) {
            alert(`Thank you, ${name}! Your RSVP has been recorded.`);
            document.getElementById("rsvpForm").reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
