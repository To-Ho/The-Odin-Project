//JS tutorial  3: Functions

//Arrow function live sample
/*
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);
*/
/*=
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener('keydown', logKey);
*/

//Nested functions
//myBigFunction() will only output myValue
//myBigFunction("Hi") will output myValue
/* function myBigFunction() {
    const myValue = 1;
  
    subFunction1(myValue);
    subFunction2(myValue);
    subFunction3(myValue);
  }
  //can run individual subfunction.
  //value can be string or number
  function subFunction1(value) {
    console.log(value);
  }
  
  function subFunction2(value) {
    console.log(value);
  }
  
  function subFunction3(value) {
    console.log(value);
  } */
