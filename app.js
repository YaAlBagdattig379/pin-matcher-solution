/*
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got 3 digit and calling again',pin)
        return getPin(); 
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C')
        calcInput.value = ' ';
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

function verifyPin(){

    const pin = document.getElementById('display-pin').value;

    const typedNumvers = document.getElementById('typed-numbers').value;

    const successNotification = document.getElementById('notify-success');

    const failNotification = document.getElementById('notify-fail');

    if(pin == typedNumvers){

        successNotification.style.display = 'block';

        failNotification.style.display = 'none';
    }
    else{
        successNotification.style.display = 'none';
        failNotification.style.display = 'block';
       
    }
}


/*
function notifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const failedMsg = document.getElementById('failed-msg');
    const successMsg = document.getElementById('success-msg');
    
    if (pin == typedNumbers) {
        successMsg.style.display = 'block';
        failedMsg.style.display = 'none';
    }
    else {
        successMsg.style.display = 'none';
        failedMsg.style.display = 'block';
    }*/
    /** */