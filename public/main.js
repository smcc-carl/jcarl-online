import { injectSpeedInsights } from '@vercel/speed-insights';
 


injectSpeedInsights();


submit.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log("clicked");

    // email.code
    Email.send({
        SecureToken : "af222074-d312-49b3-8e29-89fc531b213b",
        To : 'carl.smcc24@gmail.com',
        From : "carl.smcc24@gmail.com",
        Subject : "Book now",
        Body : ""
    }).then(
      message => alert(message)
    );
});




// Module
window.openModal = function(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.classList.add('overflow-y-hidden');
    }
};

window.closeModal = function(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-y-hidden');
    }
};

// Close modal when ESC key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        document.body.classList.remove('overflow-y-hidden');
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        });
    }
});



// FAQQ's Section