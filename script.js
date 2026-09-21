```javascript
// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let valid = true;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }

    if (message === "") {
        messageError.textContent = "Please enter your message.";
        valid = false;
    }

    if (valid) {

        successMessage.textContent =
            "Thank you! Your message has been submitted successfully.";

        successMessage.className =
            "text-success text-center mt-3";

        contactForm.reset();
    }

});
```
