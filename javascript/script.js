// Create a new element
const newEl = (createEl) => document.createElement(createEl);

// Create the main container element
const mainContainer = newEl("div");
mainContainer.setAttribute("class", "mainContainer");
document.body.appendChild(mainContainer);

// Create the master container element
const masterContainer = newEl("div");
masterContainer.setAttribute("class", "masterContainer");
mainContainer.appendChild(masterContainer);

// Create the social container element
const socialContainer = newEl("div");
socialContainer.setAttribute("class", "socialContainer");
masterContainer.appendChild(socialContainer);

// Create the form container element
const formContainer = newEl("div");
formContainer.setAttribute("class", "formContainer");
masterContainer.appendChild(formContainer);

// Create the form element
const form = newEl("form");
form.setAttribute("method", "POST");
form.setAttribute("action", "/submit");
form.setAttribute("id", "myForm");
formContainer.appendChild(form);

// Create the title element
const title = newEl("div");
title.setAttribute("id", "title");
title.innerHTML = "<h1>Login</h1>";
form.appendChild(title);

// Create the input name element
const inputName = newEl("div");
inputName.setAttribute("class", "inputName");
form.appendChild(inputName);

// Create the input email element
const inputEmail = newEl("div");
inputEmail.setAttribute("class", "inputEmail");
form.appendChild(inputEmail);

// Create the input password element
const inputPassword = newEl("div");
inputPassword.setAttribute("class", "inputPassword");
form.appendChild(inputPassword);

// Create the name label element
const nameLabel = newEl("label");
nameLabel.textContent = "Name";
nameLabel.setAttribute("for", "name");
inputName.appendChild(nameLabel);

// Create the input icons element for name
const inputIcons = newEl("div");
inputIcons.setAttribute("class", "inputIcons");
inputName.appendChild(inputIcons);

// Create the user icon element
const userIcon = newEl("i");
userIcon.classList.add("fas", "fa-user");
inputIcons.appendChild(userIcon);

// Create the name input element
const nameInput = newEl("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "userName");
nameInput.setAttribute("name", "name");
nameInput.required;
nameInput.setAttribute("placeholder", "Enter your Name");
inputIcons.appendChild(nameInput);

// Create the error icon element
const errorIcon = newEl("i");
errorIcon.classList.add("fas", "fa-circle-exclamation");
inputIcons.appendChild(errorIcon);

// Create the success icon element
const successIcon = newEl("i");
successIcon.classList.add("fas", "fa-circle-check");
inputIcons.appendChild(successIcon);

// Create the name error element
const nameError = newEl("div");
inputName.appendChild(nameError);

// Create the email label element
const emailLabel = newEl("label");
emailLabel.textContent = "Email";
emailLabel.setAttribute("for", "email");
inputEmail.appendChild(emailLabel);

// Create the input icons element for email
const email_Icons = newEl("div");
email_Icons.setAttribute("class", "email_Icons");
inputEmail.appendChild(email_Icons);

// Create the envelope icon element
const envelopeIcon = newEl("i");
envelopeIcon.classList.add("far", "fa-envelope");
email_Icons.appendChild(envelopeIcon);

// Create the email input element
const emailInput = newEl("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "userEmail");
emailInput.setAttribute("name", "email");
emailInput.setAttribute("placeholder", "Enter your Email");
email_Icons.appendChild(emailInput);

// Create the error icon element for email
const errorIcon2 = newEl("i");
errorIcon2.classList.add("fas", "fa-circle-exclamation");
email_Icons.appendChild(errorIcon2);

// Create the success icon element for email
const successIcon2 = newEl("i");
successIcon2.classList.add("fas", "fa-circle-check");
email_Icons.appendChild(successIcon2);

// Create the email error element
const emailError = newEl("div");
inputEmail.appendChild(emailError);

// Create the password label element
const passwordLabel = newEl("label");
passwordLabel.textContent = "Password";
passwordLabel.setAttribute("for", "password");
inputPassword.appendChild(passwordLabel);

// Create the input icons element for password
const password_Icons = newEl("div");
password_Icons.setAttribute("class", "password_Icons");
inputPassword.appendChild(password_Icons);

// Create the lock icon element
const lockIcon = newEl("i");
lockIcon.classList.add("fas", "fa-lock");
password_Icons.appendChild(lockIcon);

// Create the password input element
const passwordInput = newEl("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("id", "password");
passwordInput.setAttribute("name", "password");
passwordInput.setAttribute("placeholder", "Enter your Password");
password_Icons.appendChild(passwordInput);

// Create the error icon element for password
const errorIcon3 = newEl("i");
errorIcon3.classList.add("fas", "fa-circle-exclamation");
password_Icons.appendChild(errorIcon3);

// Create the success icon element for password
const successIcon3 = newEl("i");
successIcon3.classList.add("fas", "fa-circle-check");
password_Icons.appendChild(successIcon3);

// Create the password error element
const passwordError = newEl("div");
inputPassword.appendChild(passwordError);

const forgotPassDiv = newEl("div");
forgotPassDiv.setAttribute("class", "forgotPassDiv");
forgotPassDiv.innerHTML = `<a href="reset.html" id="resetPassLink" >Forgot Password?</a>`;
form.appendChild(forgotPassDiv);

// Create the submit button div element
const submitButtonDiv = newEl("div");
submitButtonDiv.setAttribute("class", "submitButtonDiv");
form.appendChild(submitButtonDiv);

// Create the submit button element
const submitButton = newEl("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit";
submitButtonDiv.appendChild(submitButton);

const signUpDiv = newEl("div");
signUpDiv.setAttribute("class", "signUpDiv");
signUpDiv.innerHTML = `<p> Not a member? <a href="signUp.html" id="signUpLink" >Register now.</a> </p>`;
form.appendChild(signUpDiv);

// Add event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameInput.value.trim() === "") {
    successIcon.style.opacity = "0";
    nameError.setAttribute("class", "nameError");
    nameError.innerHTML = "Input Name please";
    errorIcon.style.opacity = "1";
  } else {
    errorIcon.style.opacity = "0";
    successIcon.style.opacity = "1";
    console.log(nameInput.value);
    nameError.removeAttribute("class");
    nameError.innerHTML = "";
  }
  if (emailInput.value.trim() === "") {
    successIcon2.style.opacity = "0";
    errorIcon2.style.opacity = "1";
    emailError.setAttribute("class", "emailError");
    emailError.innerHTML = "Input valid email please";
  } else {
    errorIcon2.style.opacity = "0";
    successIcon2.style.opacity = "1";
    console.log(emailInput.value);
    emailError.removeAttribute("class");
    emailError.innerHTML = "";
  }
  if (passwordInput.value.trim() === "") {
    successIcon3.style.opacity = "0";
    errorIcon3.style.opacity = "1";
    passwordError.setAttribute("class", "passwordError");
    passwordError.innerHTML = "Input password please";
  } else {
    errorIcon3.style.opacity = "0";
    successIcon3.style.opacity = "1";
    console.log(passwordInput.value);
    passwordError.removeAttribute("class");
    passwordError.innerHTML = "";
  }
});
