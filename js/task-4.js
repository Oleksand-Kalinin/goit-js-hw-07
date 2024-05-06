const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', pressSubmit);

function pressSubmit(event) {
    event.preventDefault();
    const user = {};
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email.trim() === '' || password.trim() === '') {
        alert('All form fields must be filled in');
    } else {
        user.email = email.trim();
        user.password = password.trim();
        console.log(user);
        form.reset();
    }
}
