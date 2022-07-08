// this is example of js file of pin mathcher '''wow you should follow it
function getPin(){
   const pin = Math.round(Math.random() * 10000);
   const pinString = pin + "";
   if(pinString.length == 4){
      return pin;
   }
   else{
      return getPin();
   }
}
function generatePin(){
   const pinNumber = getPin()
   // //this is a stumbled input to show four digit numbers.
   document.getElementById('display-pin').value = pinNumber;
}
 document.getElementById('key-pad').addEventListener('click',function(event){   
      const number = event.target.innerText;
      const calcInput = document.getElementById('typed-numbers');
      if(isNaN(number)){
         if(number == 'C') 
         calcInput.value = '';
      }
      else{
         const previousNumber = calcInput.value;
         const newNumber = previousNumber + number;
         calcInput.value = newNumber;
      }
 })
 function verifyPin(){
   const pin =  document.getElementById('display-pin').value;
   const typedNumbers =  document.getElementById('typed-numbers').value;
   const successMsg = document.getElementById('notify-success');
   const failMsg = document.getElementById('notify-fail');
   if (pin == typedNumbers){
      successMsg.style.display = 'block';
      failMsg.style.display = 'none';
   }
   else{
      successMsg.style.display = 'none';
      failMsg.style.display = 'block';
   //  console.log('hello kaj korche na to ~!');

   }
   // console.log(pin,'hello kaj korche to ~!');
 }
