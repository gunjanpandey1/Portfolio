const contactForm = document.getElementById('contactForm');


contactForm.addEventListener('submit', function(event) {
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    
    if (name === "") {
        alert("Name is required");
        event.preventDefault(); 
        return;
    }

    if (email === "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address");
        event.preventDefault(); 
        return;
    }

    if (message === "") {
        alert("Message cannot be empty");
        event.preventDefault(); 
        return;
    }

    
    alert("Form submitted successfully!");
});

