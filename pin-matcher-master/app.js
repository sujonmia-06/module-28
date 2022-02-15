function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('Invalid pin: ' + pin)
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    console.log(pin);
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typed = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');
    if (pin == typed) {
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failMessage.style.display = 'block';
    }
}
