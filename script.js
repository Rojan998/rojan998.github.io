function onSubmitForm(e) {
  e.preventDefault(); // Prevent default form submission
  console.log('Form submitted');

  // Send the email
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'adhikar.rojan619@gmail.com',
    Password: 'password', // Consider using more secure methods for handling passwords
    To: 'rojanadhikari9001@gmail.com',
    From: document.getElementById('email').value,
    Subject: document.getElementById('subject').value,
    Body: document.getElementById('message').value,
  }).then((message) => {
    // This is where you want to show the toast notification
    Toastify({
      text: 'Email successfully sent!',
      duration: 3000,
      close: true,
      gravity: 'top', // "top" or "bottom"
      position: 'right', // "left", "center", or "right"
      style: {
        background: 'linear-gradient(to right, #00b09b, #96c93d)',
      },
    }).showToast();

    // Optionally, reset the form here if you want
    document.querySelector('.form__container').reset();
  });
}
