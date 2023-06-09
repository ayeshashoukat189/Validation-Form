function validateSignup() {
    var password = document.forms["myForm"]["password"].value;
    var confirmPassword = document.forms["myForm"]["confirmPassword"].value;
    var signupError = document.getElementById("signupError");

    if (password !== confirmPassword) {
        signupError.innerHTML = "Both Password Should be Same!";
        signupError.style.color = "red";
        return false;
    } else {
        signupError.innerHTML = "Sign Up successfully!";
        signupError.style.color = "green";
        return false;
    }
}

function validateLogin() {
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var loginError = document.getElementById("loginError");

    if (email === "" && password === "") {
        loginError.innerHTML = "Email and Password field should not be empty!";
        loginError.style.color = "red";
        return false;
    } else {
        loginError.innerHTML = "Log In successfully!";
        loginError.style.color = "green";
        return false;
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.forms["myForm"]["password"];
    var eyeIcon = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
    }
}



