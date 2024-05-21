document.addEventListener('DOMContentLoaded', () => {
    const secondBox = document.querySelector('.box');
    const mainBox = document.querySelector('.container');
    const submitBtn = document.querySelector('.submitBtn');
    const errorMessages = document.querySelectorAll('#error-message');

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        secondBox.classList.remove('hidden');
        mainBox.style.display = "";
    });

    errorMessages.forEach((errorMessage) => {
        errorMessage.addEventListener('submit', (event) => {
            event.preventDefault();
            errorMessages.innerHTML = "";
        });
    });
});