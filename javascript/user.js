const newEl = (createEl) => document.createElement(createEl);

const mainContainer = newEl("div");
mainContainer.classList.add("mainContainer");
document.body.appendChild(mainContainer);

const wrapperContainer = newEl("div");
wrapperContainer.classList.add("wrapperContainer");
mainContainer.appendChild(wrapperContainer);
wrapperContainer.innerHTML = `
<p>Hi, User</p>
<h2 id="h2">Welcome USER NAME </h2>
<div>This is User Page</div>
<div>
    <button>Register</button>
    <button>Login</button>
    <button>Logout</button>
</div>

`;
const h2Content = document.querySelector("#h2");
// h2Content.innerHTML = "hello";
