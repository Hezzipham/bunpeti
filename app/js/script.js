var contactForm = document.querySelector('#contact');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Message sent!");
    document.getElementById("contact").reset();
});