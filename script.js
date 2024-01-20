const form = document.querySelector("#signup");
form.addEventListener("submit", (event) => {
  if (form.username.value < 5) {
    event.preventDefault();
    alert("Username must be more than 5 characters.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email.value)) {
    event.preventDefault();
    alert("Enter a valid email address.");
  }

  if (
    (form.password.value < 8 && form.password2.value < 8) ||
    form.password.value == "" ||
    form.password2.value == ""
  ) {
    event.preventDefault();
    alert("Enter a valid password.");
  } else if (form.password.value !== form.password2.value) {
    event.preventDefault();
    alert("The passwords entered do not match.");
  }
});
