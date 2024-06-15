const formData = {
    email: "",
    message: "",
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', e => {
    const { name, value } = e.target;
    if (formData.hasOwnProperty(name)) {
        formData[name] = value.trim();
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedFormData) {
        form.email.value = savedFormData.email;
        form.message.value = savedFormData.message;
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();

    if (formData.email && formData.message) {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        form.reset();
    } else {
        alert('Fill please all fields');
    }
});
