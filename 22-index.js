// a....extra function for get "4" digit pin 
function getPin(){
    const pin =  Math.round(Math.random() * 10000);
    const pinDigit = pin +"";
    if(pinDigit.length == 4){
        return pin;
    } 
    else{
        // console.log("this is ovaga pin", pin);
        return getPin();
    }
}

// b.....for button press to get 4 digit codes 
function generatePin(){
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
}

// c.......to enter digit numbers 
document.getElementById("key-pad").addEventListener("click",function(event){
    const number = event.target.innerText;
    const typedDigitArea = document.getElementById("typed-numbers");
    if(isNaN(number)){
        if(number == "C"){
            typedDigitArea.value = '';
        }
    }
    else{
        const digitNumber = typedDigitArea.value;
        const newNumbers = digitNumber + number;
        typedDigitArea.value = newNumbers;
    }

})
// d.........submit button to match and varified notification 
function verifyPin(){
    // a.....for pin match 
    const pin = document.getElementById("display-pin").value 
    const typedDigitArea = document.getElementById("typed-numbers");
    const typNew = typedDigitArea.value;
    // b.....for SMS reply 
    const successMsg = document.getElementById("notify-success");
    const failedMsg = document.getElementById("notify-fail");

    if( pin == typNew){
        successMsg.style.display = 'block';
        failedMsg.style.display = 'none';
    }
    else{
        successMsg.style.display = 'node';
        failedMsg.style.display = 'block';
    }
    // to cleanase 
    typedDigitArea.value = '';
}