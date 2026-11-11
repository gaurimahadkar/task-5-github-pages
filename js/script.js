
// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });
}

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const status = document.getElementById("formStatus");

        if (!name || !email || !subject || !message) {
            status.textContent = "Please fill in all fields.";
            return;
        }

        // Replace this with your own email address
        const receiver = "your-email@example.com";

        const body =
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage: " + message;

        const mailto =
            "mailto:" + receiver +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        status.textContent = "Opening your email application...";
        window.location.href = mailto;
    });
}
