const passwordInput = document.querySelector("#password");
const passwordConf = document.querySelector("#confirm-pass");
const errorMessage = document.querySelector(".error-message");

function validatePassword() {
    if (passwordConf.value === "" || passwordInput.value === passwordConf.value) {
        errorMessage.innerHTML = "";
        passwordConf.style.border = "1px solid #E5E7EB";
    } else {
        errorMessage.innerHTML = "*Passwords do not match";
        passwordConf.style.border = "1px solid red";
    };
}

passwordInput.onkeyup = validatePassword;
passwordConf.onkeyup = validatePassword;