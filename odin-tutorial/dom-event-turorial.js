/*
//Method 2
const btn1 = document.querySelector('#btn1');
btn1.onclick = () => alert('Hello World 2'); //arrow function

//Method 3
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert('Hello World 3!');
});

//Function
function alertFunction() {
    alert('Yay, function!');
}

//method 2
const btnFunc2 = document.querySelector('.btnFunc2');
btnFunc2.onclick = alertFunction;

//method 3
const btnFunc3 = document.querySelector('.btnFunc3');
btnFunc3.addEventListener('click', alertFunction);

//addEventListener()
const btn = document.querySelector('#btn');
btn.addEventListener('Click', function(e) { //Note that function (e) is a callback from addEventListener
    console.log(e); //Output: [object MouseEvent] {"isTrusted": true}
});
//The e in that function is an object that references the event itself. Within that object you have access to many useful properties and functions 
//such as which mouse button or key was pressed, or information about the event’s target

btn.addEventListener('Click', function(e) {
    console.log(e.target); //Output: <button id="btnFunc5">Click Me 5</button>
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue'; //Change click me btn box to blue when click
});
*/
//addEventListener() to group of nodes
//button is a node list, it looks and act like an Array
const buttons = document.querySelectorAll('button');

//Use the forEach()
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});