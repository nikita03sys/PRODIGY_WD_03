document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let valid = true;

    if (!emailRegex.test(email)) {
        valid = false;
        errorMessages.innerHTML += '<p>Invalid email format.</p>';
    }

    if (!passwordRegex.test(password)) {
        valid = false;
        errorMessages.innerHTML += '<p>Password must be at least 8 characters long and contain both letters and numbers.</p>';
    }

    if (valid) {
        // Submit the form or perform further actions
        alert('Form submitted successfully!');
    }
});
