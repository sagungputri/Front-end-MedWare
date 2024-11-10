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

    loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        if (email === '' || password === '') {
            showError('*This field is required');
            return;
        }
        if (!validateEmail(email)) {
            showError('*Please enter a valid email address');
            return;
        }
        if (!validatePassword(password)) {
            showError('*Please enter a valid password');
            return;
        }
        hideError(); 
        simulateLogin(email, password);
    });
    function simulateLogin(email, password) {
        setTimeout(() => {
            alert('Login berhasil!');
            window.location.href = 'dashboard.html'; 
        }, 1000);
    }
});
