// Countdown and redirect logic
let timeLeft = 15;
const countdownElement = document.getElementById("countdown");

const interval = setInterval(() => {
  timeLeft--;
  countdownElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(interval);
    window.location.href = "login.html"; // Redirect to login page
  }
}, 1000);
