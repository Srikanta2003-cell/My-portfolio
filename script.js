// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        // Clear previous messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let isValid = true;

        // Name validation
        if (name === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Message validation
        if (message === "") {
            messageError.textContent = "Please enter your message.";
            isValid = false;
        }

        // Open the visitor's email application
        if (isValid) {
            const subject = encodeURIComponent("Portfolio Contact Message");

            const body = encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}`
            );

            const mailtoLink =
                `mailto:sahusrikant588@gmail.com?subject=${subject}&body=${body}`;

            successMessage.textContent =
                "Your email application will open with your message. Please send it there.";

            window.location.href = mailtoLink;
        }
    });
}


// ================= NAVBAR AUTO CLOSE =================

const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.getElementById("navbarNav");

navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (
            navbarCollapse &&
            navbarCollapse.classList.contains("show")
        ) {
            bootstrap.Collapse
                .getOrCreateInstance(navbarCollapse)
                .hide();
        }
    });
});