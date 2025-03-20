function onSubmitForm(e) {
  e.preventDefault(); // Prevent default form submission
  console.log('Form submitted');

  // Send the email
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'abc@gmail.com',
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

const startDate = () => {
  let d = new Date();
  document.getElementById('date').innerHTML = d.getFullYear();
};
startDate();

function contact_us() {
  document
    .getElementById('container__contactus')
    .scrollIntoView({ behavior: 'smooth' });
}

function download_cv() {
  const link = document.createElement('a');
  link.href = 'Rojan_Adhikari_Resume-Final.pdf'; // Ensure the file is in the correct directory
  link.download = 'Rojan_Adhikari_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
