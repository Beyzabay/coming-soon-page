const form = document.getElementById('formID');
const input = document.getElementById('email');
const textError = document.getElementById('text-error');
const emailMessage = document.getElementById('emailMessage');
const iconError = document.getElementById('icon-error');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const succesMessage = document.getElementById('succesMessage');


form.addEventListener('submit', function(event){
    if(!emailPattern.test(input.value) && input.value.trim() != ''){
        emailMessage.style.display = 'block';
        iconError.style.display = 'block';
        textError.style.display = 'none';
        succesMessage.style.display = 'none';  // input border color -- red
        email.style.borderColor = 'red';
        email.style.borderWidth = '2px';
    } else if (emailPattern.test(input.value) && input.value.trim() != ''){
        succesMessage.style.display = 'block';
        textError.style.display = 'none';
        iconError.style.display = 'none';
        emailMessage.style.display = 'none';
        email.style.borderColor = '';
    } else if ( input.value.trim() === ''){
        iconError.style.display = 'block';
        textError.style.display = 'block';
        emailMessage.style.display = 'none';
        succesMessage.style.display = 'none';
        email.style.borderColor = 'red';
        email.style.borderWidth = '2px';
    }
    event.preventDefault();
});

