const email = document.getElementById('email');
const msg = document.querySelector('small');

email.addEventListener('submit', (event) => {
  if(email.value !== email.value.toLowerCase()){
    msg.textContent = "Please use lower case only.";
    event.preventDefault();
    }
});