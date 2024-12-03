document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const message = document.getElementById("message").value;
    localStorage.setItem("userMessage", message); // Save message

    // Redirect after ensuring message is stored
    setTimeout(() => {
      window.location.href = "submit.html";
    }, 500); // Delay by 500ms
  });

// Toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;
  this.classList.toggle("fa-eye-slash");
});
