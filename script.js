const newEl = (createEl) => document.createElement(createEl);
const mainContainer = newEl("div");
mainContainer.setAttribute("class", "mainContainer");
document.body.appendChild(mainContainer);

const formContainer = document.createElement("div");
formContainer.setAttribute("class", "formContainer");
mainContainer.appendChild(formContainer);

const form = document.createElement("form");

// set attributes for the form
form.setAttribute("method", "POST");
form.setAttribute("action", "/submit");
form.setAttribute("id", "myForm");
formContainer.appendChild(form);

const inputName = document.createElement("div");
inputName.setAttribute("class", "inputName");
form.appendChild(inputName);

const inputEmail = document.createElement("div");
inputEmail.setAttribute("class", "inputEmail");
form.appendChild(inputEmail);

const inputPassword = document.createElement("div");
inputPassword.setAttribute("class", "inputPassword");
form.appendChild(inputPassword);

// Create a name label element
const nameLabel = document.createElement("label");
nameLabel.textContent = "Name";
nameLabel.setAttribute("for", "name");
inputName.appendChild(nameLabel);

const userIcon = document.createElement("i");
userIcon.classList.add("fas", "fa-user");
inputName.appendChild(userIcon);
// Create a name input element for name
const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "userName");
nameInput.setAttribute("name", "name");
nameInput.required;
nameInput.setAttribute("placeholder", "Starnslaus");
inputName.appendChild(nameInput);

const errorIcon = document.createElement("i");
errorIcon.classList.add("fas", "fa-circle-exclamation");
inputName.appendChild(errorIcon);

const successIcon = document.createElement("i");
successIcon.classList.add("fas", "fa-circle-check");
inputName.appendChild(successIcon);

const nameError = document.createElement("div");
nameError.setAttribute("class", "nameError");
nameError.innerHTML = "Input Name please";
inputName.appendChild(nameError);

// Create an email label element
const emailLabel = document.createElement("label");
emailLabel.textContent = "Email";
emailLabel.setAttribute("for", "email");
inputEmail.appendChild(emailLabel);

const envelopeIcon = document.createElement("i");
envelopeIcon.classList.add("far", "fa-envelope");
inputEmail.appendChild(envelopeIcon);

// Create an email input element for name
const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "userEmail");
emailInput.setAttribute("name", "email");
emailInput.setAttribute("placeholder", "name@gmail.com");
inputEmail.appendChild(emailInput);

const errorIcon2 = document.createElement("i");
errorIcon2.classList.add("fas", "fa-circle-exclamation");
inputEmail.appendChild(errorIcon2);

const successIcon2 = document.createElement("i");
successIcon2.classList.add("fas", "fa-circle-check");
inputEmail.appendChild(successIcon2);

const emailError = document.createElement("div");
emailError.setAttribute("class", "emailError");
emailError.innerHTML = "Input valid email please";
inputEmail.appendChild(emailError);

// Create a password label element
const passwordLabel = document.createElement("label");
passwordLabel.textContent = "Password";
emailLabel.setAttribute("for", "password");
inputPassword.appendChild(passwordLabel);

const lockIcon = document.createElement("i");
lockIcon.classList.add("fas", "fa-lock");
inputPassword.appendChild(lockIcon);

// Create a password input element for name
const passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("id", "password");
passwordInput.setAttribute("name", "password");
inputPassword.appendChild(passwordInput);

const errorIcon3 = document.createElement("i");
errorIcon3.classList.add("fas", "fa-circle-exclamation");
inputPassword.appendChild(errorIcon3);

const successIcon3 = document.createElement("i");
successIcon3.classList.add("fas", "fa-circle-check");
inputPassword.appendChild(successIcon3);

const passwordError = document.createElement("div");
passwordError.setAttribute("class", "passwordError");
passwordError.innerHTML = "Input password please";
inputPassword.appendChild(passwordError);

// Create a submit button
const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit";
form.appendChild(submitButton);
