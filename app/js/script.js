"use strict";
var contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Message sent!");
    contactForm.reset();
});
