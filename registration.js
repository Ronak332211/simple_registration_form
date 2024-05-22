document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.style.display = 'none');
    
    let valid = true;

    // Validate username
    const username = document.getElementById('username').value;
    if (username.length < 3) {
        const usernameError = document.getElementById('usernameError');
        usernameError.textContent = 'Username must be at least 3 characters long';
        usernameError.style.display = 'block';
        valid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        const emailError = document.getElementById('emailError');
        emailError.textContent = 'Invalid email address';
        emailError.style.display = 'block';
        valid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        const passwordError = document.getElementById('passwordError');
        passwordError.textContent = 'Password must be at least 6 characters long';
        passwordError.style.display = 'block';
        valid = false;
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert('Registration successful!');
        // Here you can add the code to actually submit the form data to the server
    }
});
