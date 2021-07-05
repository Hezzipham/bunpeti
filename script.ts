
const contactForm = document.querySelector('#contactForm')! as HTMLFormElement;
    contactForm.addEventListener('submit', function(e){
        e.preventDefault();
        alert("Message sent!");
        contactForm.reset();
    }
      
    );
