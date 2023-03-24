var firstName = document.forms["form"]["firstName"];
var lastName = document.forms["form"]["lastName"];
var email = document.forms["form"]["email"];
var password = document.forms["form"]["password"];

var firstName_error = document.getElementById("firstName_error");
var lastName_error = document.getElementById("lastName_error");
var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("pass_error");

firstName.addEventListener("textInput", firstName_verify);
lastName.addEventListener("textInput", lastName_verify);
email.addEventListener("textInput", email_verify);
password.addEventListener("textInput", password_verify);

function validate() {
  if (firstName.value == "") {
    firstName.style.border = "2px solid red";
    firstName_error.style.display = "block";
    return false;
  }
  if (lastName.value == "") {
    lastName.style.border = "2px solid red";
    lastName_error.style.display = "block";
    return false;
  }

  if (email.value == "") {
    email.style.border = "2px solid red";
    email_error.style.display = "block";
    return false;
  }
  if (password.value == "") {
    password.style.border = "2px solid red";
    pass_error.style.display = "block";
    return false;
  }
}

function firstName_verify() {
  if (firstName.value.length >= 3) {
    firstName.style.border = "2px solid silver";
    firstName_error.style.display = "none";
    firstName.focus();
    return true;
  }
}

function lastName_verify() {
  if (lastName.value.length >= 3) {
    lastName.style.border = "2px solid silver";
    lastName_error.style.display = "none";
    return true;
  }
}

function email_verify() {
  if (email.value.length >= 8) {
    email.style.border = "2px solid silver";
    email_error.style.display = "none";
    return true;
  }
}

function password_verify() {
  if (password.value.length >= 6) {
    password.style.border = "2px solid silver";
    pass_error.style.display = "none";
    return true;
  }
}
