document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from actually submitting

    const message = document.getElementById("message").value;
    localStorage.setItem("userMessage", message); // Store message in localStorage

    // Redirect to submit.html page after storing message
    window.location.href = "submit.html";
  });

// Toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  // Toggle the type attribute to show or hide password
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;

  // Toggle the eye icon class to show open/closed state
  this.classList.toggle("fa-eye-slash");
});
