const passwordInput = document.querySelector("#password");
const passwordConf = document.querySelector("#confirm-pass");
const errorMessage = document.querySelector(".error-message");

function validatePassword() {
    if (passwordConf.value === "" || passwordInput.value === passwordConf.value) {   
        errorMessage.innerHTML = "";
        passwordConf.style.borderColor = "";
        
    } else {
        errorMessage.innerHTML = "*Passwords do not match";
        passwordConf.style.borderColor = "red";
    };

}


passwordInput.onkeyup = validatePassword;
passwordConf.onkeyup = validatePassword;