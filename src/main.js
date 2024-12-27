const fname = document.getElementById('fname');
const email = document.getElementById('email');
const submit = document.getElementById('form-jc');




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




window.openModal = function(modalId) {
    document.getElementById(modalId).style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
}

window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
}

// Close all modals when press ESC
document.onkeydown = function(event) {
    event = event || window.event;
    if (event.keyCode === 27) {
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
        let modals = document.getElementsByClassName('modal');
        Array.prototype.slice.call(modals).forEach(i => {
            i.style.display = 'none'
        })
    }
};







var form = document.getElementById('from-jc');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: 'POST',
        body: new FormData(document.getElementById('from-jc')),
    }). then(
        response => response.json(),
    ).then((html) => {
        window.open('index.html', '_blank');
    });
});