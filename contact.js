document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const successMsg = document.getElementById("test-contact-success");

  let valid = true;
  document.querySelectorAll(".error").forEach((err) => (err.textContent = ""));

  if (!name.value.trim()) {
    valid = false;
    document.getElementById("test-contact-error-name").textContent =
      "Full name required";
  }
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email.value)) {
    valid = false;
    document.getElementById("test-contact-error-email").textContent =
      "Invalid email";
  }
  if (message.value.trim().length < 10) {
    valid = false;
    document.getElementById("test-contact-error-message").textContent =
      "Message too short";
  }

if (valid) {
  successMsg.textContent = "Form submitted successfully!";
  successMsg.focus();
  e.target.reset();
}
});
