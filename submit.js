// Get the user's message from localStorage
const userMessage = localStorage.getItem("userMessage");

// Display the user's message if available
if (userMessage) {
  document.getElementById("messageContent").textContent = userMessage;
} else {
  document.getElementById("messageContent").textContent = "No message found!";
}

// Countdown timer for redirection
let countdown = 15;
const countdownElement = document.getElementById("countdown");

const countdownTimer = setInterval(() => {
  countdown--;
  countdownElement.textContent = countdown;

  if (countdown <= 0) {
    clearInterval(countdownTimer);
    window.location.href = "login.html"; // Redirect after countdown
  }
}, 1000);
