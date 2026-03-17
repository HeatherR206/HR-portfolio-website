contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
    .then(() => {
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';
    })
    .catch((error) => alert("Form submission failed: " + error));
});
