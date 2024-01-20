const form = document.querySelector("#signup");
// assigning the variable form to the DOM's form via id.
form.addEventListener("submit", (event) => {
  if (form.username.value < 5) {
    event.preventDefault();
    alert("Username must be more than 5 characters.");
  }
  // using if statement with the conditional - if the username value is less than 5 characters is met an alert message will popup. PreventDefault keeps the page from refreshing.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email.value)) {
    event.preventDefault();
    alert("Enter a valid email address.");
  }
  // using regex pattern to compare it to the form email value. if the value doesn't match the format an alert message will popup.
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
  // the first if statment conditional states that if the characters for password is less than 8 or if an empty string/ nothing is entered the alert message 'enter valid password' would popup. the else if conditional is so that both passwords match each other and if they don't an alert would popup.
});
