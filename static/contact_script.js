const contentPanel = document.getElementsByClassName('content')[0]
const send_button = document.getElementsByClassName('send_button')[0]

send_button.addEventListener('click', function() {
    send_email()
});


function send_email(){
    console.log("Sending email...")
    var email = document.getElementById('sender_email').value
    var name = document.getElementById('sender_name').value
    var message = document.getElementById('sender_text').value
    console.log(email + "\n" + name + "\n" + message)

    Email.send({
        SecureToken: "48d6791f-a6de-47de-9183-367664d22aca",
        // Temporary security measure
        To : 'resumewebsite432@gmail.com',
        From : "resumewebsite432@gmail.com",
        Subject : "New message on website",
        Body :  "Email: " + email + "</br>" +
                "Name: " + name + "</br>" +
                "Message: " + message
    }).then(
        message => alert(message)
      );
}