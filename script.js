const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (firstName.value === "") {
    firstName.style.border = "2px solid red";
    firstName_error.style.display = "block";
    firstName_error.style.marginBottom = "15px";
    firstName.style.marginBottom = "0px";
  } else {
    firstName.style.border = "2px solid silver";
    firstName_error.style.display = "none";
    firstName.style.marginBottom = "27px";
  }

  if (lastName.value === "") {
    lastName.style.border = "2px solid red";
    lastName_error.style.display = "block";
    lastName_error.style.marginBottom = "15px";
    lastName.style.marginBottom = "0px";
  } else {
    lastName.style.border = "2px solid silver";
    lastName_error.style.display = "none";
    lastName.style.marginBottom = "27px";
  }

  if (email.value === "") {
    email.style.border = "2px solid red";
    email_error.style.display = "block";
    email_error.style.marginBottom = "15px";
    email.style.marginBottom = "0px";
  } else {
    email.style.border = "2px solid silver";
    email_error.style.display = "none";
    email.style.marginBottom = "27px";
  }

  if (password.value === "") {
    password.style.border = "2px solid red";
    pass_error.style.display = "block";
    pass_error.style.marginBottom = "15px";
    password.style.marginBottom = "0px";
  } else {
    password.style.border = "2px solid silver";
    pass_error.style.display = "none";
    password.style.marginBottom = "27px";
  }
});
