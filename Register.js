
let generatedOtp = null;


function signUp() {
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    
    let isValid = true;

    if (!username) {
        document.getElementById("usernameError").style.display = "block";
        isValid = false;
    }

    if (!email || !validateEmail(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    if (!password || password.length < 8) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    
    generatedOtp = generateOtp();
    alert(`A verification OTP has been sent to ${email}. Your OTP is: ${generatedOtp}`);

    
    document.getElementById("otpSection").style.display = "block";
    document.getElementById("otpButton").style.display = "block";
}


function verifyOtp() {
    const otpInput = document.getElementById("otp").value;
    document.getElementById("otpError").style.display = "none";

    if (otpInput === generatedOtp) {
        alert("Your account has been successfully verified. You can now log in.");
        window.location.href = "login.html";
    } else {
        document.getElementById("otpError").style.display = "block";
    }
}


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}