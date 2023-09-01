const newEl = (createEl) => document.createElement(createEl);

const mainContainer = newEl("div");
mainContainer.setAttribute("class", "mainContainer");
document.body.appendChild(mainContainer);

const formContainer = newEl("div");
formContainer.setAttribute("class", "formContainer");
mainContainer.appendChild(formContainer);

const form = newEl("form");

// set attributes for the form
form.setAttribute("method", "POST");
form.setAttribute("action", "/submit");
form.setAttribute("id", "myForm");
formContainer.appendChild(form);

const inputName = newEl("div");
inputName.setAttribute("class", "inputName");
form.appendChild(inputName);

const inputEmail = newEl("div");
inputEmail.setAttribute("class", "inputEmail");
form.appendChild(inputEmail);

const inputPassword = newEl("div");
inputPassword.setAttribute("class", "inputPassword");
form.appendChild(inputPassword);

// Create a name label element
const nameLabel = newEl("label");
nameLabel.textContent = "Name";
nameLabel.setAttribute("for", "name");
inputName.appendChild(nameLabel);

const inputIcons = newEl("div");
inputIcons.setAttribute("class", "inputIcons");
inputName.appendChild(inputIcons);

const userIcon = newEl("i");
userIcon.classList.add("fas", "fa-user");
inputIcons.appendChild(userIcon);
// Create a name input element for name
const nameInput = newEl("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "userName");
nameInput.setAttribute("name", "name");
nameInput.required;
nameInput.setAttribute("placeholder", "Starnslaus");
inputIcons.appendChild(nameInput);

const errorIcon = newEl("i");
errorIcon.classList.add("fas", "fa-circle-exclamation");
inputIcons.appendChild(errorIcon);

const successIcon = newEl("i");
successIcon.classList.add("fas", "fa-circle-check");
inputIcons.appendChild(successIcon);

const nameError = newEl("div");

inputName.appendChild(nameError);

// Create an email label element
const emailLabel = newEl("label");
emailLabel.textContent = "Email";
emailLabel.setAttribute("for", "email");
inputEmail.appendChild(emailLabel);

const email_Icons = newEl("div");
email_Icons.setAttribute("class", "email_Icons");
inputEmail.appendChild(email_Icons);

const envelopeIcon = newEl("i");
envelopeIcon.classList.add("far", "fa-envelope");
email_Icons.appendChild(envelopeIcon);

// Create an email input element for name
const emailInput = newEl("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "userEmail");
emailInput.setAttribute("name", "email");
emailInput.setAttribute("placeholder", "name@gmail.com");
email_Icons.appendChild(emailInput);

const errorIcon2 = newEl("i");
errorIcon2.classList.add("fas", "fa-circle-exclamation");
email_Icons.appendChild(errorIcon2);

const successIcon2 = newEl("i");
successIcon2.classList.add("fas", "fa-circle-check");
email_Icons.appendChild(successIcon2);

const emailError = newEl("div");

inputEmail.appendChild(emailError);

// Create a password label element
const passwordLabel = newEl("label");
passwordLabel.textContent = "Password";
emailLabel.setAttribute("for", "password");
inputPassword.appendChild(passwordLabel);

const password_Icons = newEl("div");
password_Icons.setAttribute("class", "password_Icons");
inputPassword.appendChild(password_Icons);

const lockIcon = newEl("i");
lockIcon.classList.add("fas", "fa-lock");
password_Icons.appendChild(lockIcon);

// Create a password input element for name
const passwordInput = newEl("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("id", "password");
passwordInput.setAttribute("name", "password");
passwordInput.setAttribute("placeholder", "password");
password_Icons.appendChild(passwordInput);

const errorIcon3 = newEl("i");
errorIcon3.classList.add("fas", "fa-circle-exclamation");
password_Icons.appendChild(errorIcon3);

const successIcon3 = newEl("i");
successIcon3.classList.add("fas", "fa-circle-check");
password_Icons.appendChild(successIcon3);

const passwordError = newEl("div");

inputPassword.appendChild(passwordError);

// Create a submit button
const submitButton = newEl("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit";
form.appendChild(submitButton);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //create the classes by click

  if (nameInput.value.trim() === "") {
    successIcon.style.opacity = "0";
    nameError.setAttribute("class", "nameError");
    nameError.innerHTML = "Input Name please";
    errorIcon.style.opacity = "1";
  } else {
    errorIcon.style.opacity = "0";
    successIcon.style.opacity = "1";
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
    passwordError.removeAttribute("class");
    passwordError.innerHTML = "";
  }

  // generate the HTML whenever there is an error
});

let error_message = () => {};
