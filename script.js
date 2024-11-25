document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    var isValid = true;

    // Перевірка Email
    if (!emailPattern.test(email)) {
        document.getElementById('floatingInput').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('floatingInput').classList.remove('is-invalid');
    }

    // Перевірка Password
    if (password.length < 6) {
        document.getElementById('floatingPassword').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('floatingPassword').classList.remove('is-invalid');
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // Тут можна додати код для обробки даних форми
    }
});
