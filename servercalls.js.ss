const depositButton = document.querySelector('#deposit-button');
const withdrawButton = document.querySelector('#withdraw-button');
const accountNameInput = document.querySelector('#acc-name');
const amountInput = document.querySelector('#amount');
const passwordHashInput = document.querySelector('#pass-hash');
const responseDiv = document.querySelector('#response');

depositButton.addEventListener('click', () => {
    const accName = accountNameInput.value;
    const amount = amountInput.value;
    const passHash = passwordHashInput.value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://51.161.163.66:44658/deposit');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
        if (xhr.status === 200) {
            responseDiv.innerHTML = xhr.responseText;
        } else {
            responseDiv.innerHTML = 'Error processing request';
        }
    };
    xhr.send(`acc-name=${accName}&amount=${amount}&pass-hash=${passHash}`);
});

withdrawButton.addEventListener('click', () => {
    const accName = accountNameInput.value;
    const amount = amountInput.value;
    const passHash = passwordHashInput.value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://51.161.163.66:44658/withdraw');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
        if (xhr.status === 200) {
            responseDiv.innerHTML = xhr.responseText;
        } else {
            responseDiv.innerHTML = 'Error processing request';
        }
    };
    xhr.send(`acc-name=${accName}&amount=${amount}&pass-hash=${passHash}`);
});
