document.getElementById("contact-form")
.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_nh2hm9c", "template_fvzx627", this)
    .then(function() {
        alert("Message Sent Successfully!");
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Failed to send message. Please try again.");
    });
});
