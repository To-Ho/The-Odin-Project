//Method 2: onclick js part
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

//Method 3: addEventListener, js part
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello Method 3");
});

//Named function
function alertFunction() {
    alert("Named function YAY!");
}
//Method 2
btn.onclick = alertFunction;
//Method 3
btn2.addEventListener('click', alertFunction);

//Trying out stuffs
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    e.target.style.background = 'blue';
});

//Attaching listeners to groups of nodes
//Use querySelectorAll(''):
// buttons is a node list. It looks and acts much like an array
const buttonS = document.querySelectorAll('button');

//Use .forEach method to iterate through each button
buttonS.forEach((button) => {
    //and for each one, add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
});