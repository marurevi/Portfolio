const email = document.getElementById('email');
const msg = document.querySelector('small');

email.addEventListener('input', function (event) {
    if(email.value == email.value.toLowerCase()){
        msg.textContent = "";
    }else{
        msg.textContent = "Please use lower case only.";
    }
})