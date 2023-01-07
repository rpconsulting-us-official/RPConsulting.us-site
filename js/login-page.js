const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (userrname == "har" && password == "har1" || username == "riley" && password == "riley1") {
	window.location.assign("/index1.html");
        alert("You have successfully logged in.");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})