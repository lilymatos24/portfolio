
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    document.getElementById('errorMessage').innerText = 'Please fill out all fields.';
    document.getElementById('errorMessage').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
    return;
  }


  document.getElementById('successMessage').style.display = 'block';
  document.getElementById('errorMessage').style.display = 'none';


  document.getElementById('contactForm').reset();
});
