// Get the user's message from localStorage
const userMessage = localStorage.getItem("userMessage");

// Display the user's message if available
if (userMessage) {
  document.getElementById("messageContent").textContent = userMessage;
}

// Countdown timer for redirection
let countdown = 20;
const countdownElement = document.getElementById("countdown");

const countdownTimer = setInterval(function () {
  countdown--;
  countdownElement.textContent = countdown;

  if (countdown <= 0) {
    clearInterval(countdownTimer);
    window.location.href = "login.html"; // Redirect to login after countdown
  }
}, 1000); // Update every second
