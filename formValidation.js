const email = document.getElementById('email');
const msg = document.querySelector('small');
const form = document.getElementById('submitbtn');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    msg.textContent = 'Please use lower case only.';
    email.style.border = '1px solid red';
    event.preventDefault();
  } else {
    form.submit();
    email.remove('style');
    msg.remove();
  }
});
