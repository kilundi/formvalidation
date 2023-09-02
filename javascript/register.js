// Create a new element
const newEl = (createEl) => document.createElement(createEl);

const mainContainer = newEl("div");
mainContainer.classList.add("mainContainer");
document.body.appendChild(mainContainer);

const wrapperContainer = newEl("div");
wrapperContainer.classList.add("wrapperContainer", "flexColumnCentered");
mainContainer.append(wrapperContainer);

const title = newEl("div");
title.setAttribute("class", "title");
title.innerHTML = `<h1>Register Now</h1>`;
wrapperContainer.append(title);

const form = newEl("form");
form.setAttribute("id", "registerForm");
// form.addEventListener("submit", registerUser, false);
form.setAttribute("method", "POST");
form.setAttribute("action", "/submit");
wrapperContainer.append(form);

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

const errorPassword = newEl("div");

form.appendChild(errorPassword);

const inputPassConfirm = newEl("div");
inputPassConfirm.setAttribute("class", "inputPassConfirm");
form.appendChild(inputPassConfirm);

const buttonAndSelect = newEl("div");
buttonAndSelect.setAttribute("class", "buttonAndSelect flexRowEnds");
form.appendChild(buttonAndSelect);

const userAdmin = newEl("select");
userAdmin.setAttribute("class", "userAdmin");
buttonAndSelect.appendChild(userAdmin);

const option1 = newEl("option");
option1.value = "User";
option1.innerText = "User";
userAdmin.appendChild(option1);

const optio2 = newEl("option");
optio2.value = "Admin";
optio2.innerText = "Admin";
userAdmin.appendChild(optio2);

const registerBtn = newEl("button");
registerBtn.setAttribute("class", "registerBtn");
registerBtn.setAttribute("type", "submit");
registerBtn.innerHTML = `Register now`;
buttonAndSelect.appendChild(registerBtn);

const loginLinkDiv = newEl("div");
loginLinkDiv.setAttribute("class", "loginLinkDiv");
loginLinkDiv.innerHTML = `Already have an account? <a href="index.html">Login now</a>`;
form.appendChild(loginLinkDiv);

// Create the user icon element
const userIcon = newEl("i");
userIcon.classList.add("fas", "fa-user");
inputName.appendChild(userIcon);

const userName = newEl("input");
userName.type = "text";
userName.name = "name";
userName.id = "userName";
userName.placeholder = "Enter your Name";
// userName.required = true;
inputName.appendChild(userName);

const errorIcon = newEl("i");
errorIcon.classList.add("fa-solid", "fa-circle-exclamation");
inputName.appendChild(errorIcon);

// Create the success icon element
const successIcon = newEl("i");
successIcon.classList.add("fas", "fa-circle-check");
inputName.appendChild(successIcon);

// Create the envelope icon element
const envelopeIcon = newEl("i");
envelopeIcon.classList.add("far", "fa-envelope");
inputEmail.appendChild(envelopeIcon);

const userEmail = newEl("input");
userEmail.type = "email";
userEmail.name = "email";
userEmail.id = "userEmail";
userEmail.placeholder = "Enter your Email";
// userEmail.required = true;
inputEmail.appendChild(userEmail);

// Create the error icon element for email
const errorIcon2 = newEl("i");
errorIcon2.classList.add("fas", "fa-circle-exclamation");
inputEmail.appendChild(errorIcon2);

// Create the success icon element for email
const successIcon2 = newEl("i");
successIcon2.classList.add("fas", "fa-circle-check");
inputEmail.appendChild(successIcon2);

// Create the lock icon element
const lockIcon = newEl("i");
lockIcon.classList.add("fas", "fa-lock");
inputPassword.appendChild(lockIcon);

const password = newEl("input");
password.type = "password";
password.name = "password";
password.id = "password";

password.placeholder = "Enter password";
// password.required = true;
inputPassword.appendChild(password);

// Create the error icon element for password
const errorIcon3 = newEl("i");
errorIcon3.classList.add("fas", "fa-circle-exclamation");
inputPassword.appendChild(errorIcon3);

// Create the success icon element for password
const successIcon3 = newEl("i");
successIcon3.classList.add("fas", "fa-circle-check");
inputPassword.appendChild(successIcon3);

// Create the lock icon element
const lockIcon1 = newEl("i");
lockIcon1.classList.add("fas", "fa-lock");
inputPassConfirm.appendChild(lockIcon1);

const passwordConfirm = newEl("input");
passwordConfirm.type = "password";
passwordConfirm.name = "password";
passwordConfirm.id = "passwordConfirm";
passwordConfirm.placeholder = "Confirm password";
// passwordConfirm.required = true;
inputPassConfirm.appendChild(passwordConfirm);

// Create the error icon element for password
const errorIcon4 = newEl("i");
errorIcon4.classList.add("fas", "fa-circle-exclamation");
inputPassConfirm.appendChild(errorIcon4);

// Create the success icon element for password
const successIcon4 = newEl("i");
successIcon4.classList.add("fas", "fa-circle-check");
inputPassConfirm.appendChild(successIcon4);

const selectElement = document.querySelector(".userAdmin");
const userNameInput = document.querySelector("#userName");
const userEmailInput = document.querySelector("#userEmail");
const passWordInput = document.querySelector("#password");
const confirmPassWordInput = document.querySelector("#passwordConfirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    if (userName.value.trim() === "") {
      // nameError.setAttribute("class", "nameError");
      // nameError.innerHTML = "Input Name please";
      errorIcon.style.opacity = "1";
      // userName.required = "required";
      successIcon.style.opacity = "0";
      throw new Error("This is an error.");
    } else {
      errorIcon.style.opacity = "0";
      successIcon.style.opacity = "1";
      // nameError.removeAttribute("class");
      // nameError.innerHTML = "";
    }
    if (userEmail.value.trim() === "") {
      errorIcon2.style.opacity = "1";
      // userEmail.required = "required";
      successIcon2.style.opacity = "0";
      // emailError.setAttribute("class", "emailError");
      // emailError.innerHTML = "Input valid email please";
      throw new Error("This is an error.");
    } else {
      errorIcon2.style.opacity = "0";
      successIcon2.style.opacity = "1";
      // emailError.removeAttribute("class");
      // emailError.innerHTML = "";
    }
    if (password.value.trim() === "") {
      errorIcon3.style.opacity = "1";
      // password.required = "required";
      successIcon3.style.opacity = "0";
      // passwordError.setAttribute("class", "passwordError");
      // passwordError.innerHTML = "Input password please";
      throw new Error("This is an error.");
    } else {
      errorIcon3.style.opacity = "0";
      successIcon3.style.opacity = "1";
      // passwordError.removeAttribute("class");
      // passwordError.innerHTML = "";
    }
    if (passwordConfirm.value.trim() === "") {
      errorIcon4.style.opacity = "1";
      // passwordConfirm.required = "required";

      successIcon4.style.opacity = "0";
      // passwordError.setAttribute("class", "passwordError");
      // passwordError.innerHTML = "Input password please";
      throw new Error("This is an error.");
    } else if (passwordConfirm.value.trim() !== password.value.trim()) {
      errorPassword.classList.add("errorPassword");
      errorPassword.textContent = "Password not matched!";
      console.log("no password match");
      successIcon4.style.opacity = "0";
      errorIcon4.style.opacity = "1";
      throw new Error("This is an error.");
    } else {
      errorPassword.removeAttribute("class");
      errorPassword.textContent = "";
      errorIcon4.style.opacity = "0";
      successIcon4.style.opacity = "1";
      // passwordError.removeAttribute("class");
      // passwordError.innerHTML = "";
    }

    const selectedValue = selectElement.value;
    console.log(selectedValue);

    const userNameValue = userNameInput.value;
    console.log(userNameValue);

    const userEmailValue = userEmailInput.value;
    console.log(userEmailValue);

    const passWordInputValue = passWordInput.value;
    console.log(passWordInputValue);

    const confirmPassWordInputValue = confirmPassWordInput.value;
    console.log(confirmPassWordInputValue);
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
});
