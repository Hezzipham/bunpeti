var contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Message sent!");
    document.getElementById("contactForm").reset();
});