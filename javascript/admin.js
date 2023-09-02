const newEl = (createEl) => document.createElement(createEl);

const mainContainer = newEl("div");
mainContainer.classList.add("mainContainer");
document.body.appendChild(mainContainer);

const wrapperContainer = newEl("div");
wrapperContainer.classList.add("wrapperContainer");
mainContainer.appendChild(wrapperContainer);
wrapperContainer.innerHTML = `
<p>Hi, Admin</p>
<h2>Welcome ADMIN NAME </h2>
<div>This is Admin Page</div>
<div>
    <button>Register</button>
    <button>Login</button>
    <button>Logout</button>
</div>

`;
