document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.querySelector('.error-message');
    const loginButton = document.querySelector('.login-button');
    
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function hideError() {
        errorMessage.style.display = 'none';
    }

    function validateEmail(email) { 
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6; // Password minimal 6 karakter
    }


    function validateForm() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === '') {
            showError('*Email field is required');
            return false;
        }

        if (!validateEmail(email)) {
            showError('*Please enter a valid email address');
            return false;
        }

        if (password === '') {
            showError('*Password field is required');
            return false;
        }

        if (!validatePassword(password)) {
            showError('*Password must be at least 6 characters long');
            return false;
        }

        hideError(); 
        return true;
    }

    loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (validateForm()) {
            simulateLogin(emailInput.value.trim(), passwordInput.value.trim());
        }
    });

    function simulateLogin(email, password) {
        setTimeout(() => {
            alert('Login berhasil!');
            window.location.href = 'dashboard.html'; 
        }, 1000);
    }
});
