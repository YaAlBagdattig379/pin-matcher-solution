// a ... for pinCreate purposes 
function pinCreate(){
    const digit = Math.round(Math.random() * 10000);
    const digitNumber = digit + "";
    if(digitNumber.length == 4 ){
        return digit;
    }
    else{
        // console.log("abr real 4 digit pin",digit);
        return pinCreate();
    }
}
// b.....generatePin to get digit 
function generatePin(){
    const pin = pinCreate()
    // const pinValue = pin.value;
    const displayPin = document.getElementById("display-pin");
    // const displayPinValue = displayPin.value;
    displayPin.value =  pin;
    // console.log(displayPinValue);
}
// c....to number using event bubble
document.getElementById("key-pad").addEventListener("click",function(event){
    const numberEvent = event.target.innerText;
    const preNumbers = document.getElementById("typed-numbers");
    if(isNaN(numberEvent)){
        if(numberEvent == "C")
           preNumbers.value = " ";
    }
    else{
        const preNumbersValue = preNumbers.value;
        const newNumber = preNumbersValue + numberEvent;
        preNumbers.value = newNumber;
    }
});
function verifyPin(){
    const preNumbers = document.getElementById("typed-numbers").value;
    const displayPin = document.getElementById("display-pin").value;
    const successSms = document.getElementById("notify-success");
    const failSms  = document.getElementById("notify-fail");
    if(preNumbers == displayPin){
        successSms.style.display = "block" 
        failSms.style.display = "none" 
        // console.log("helo are you success!")
    }
    else{
        successSms.style.display = "none";
        failSms.style.display = "block";
        // console.log("secret door is closed for you !")
    }
    preNumbers.value = '';
}