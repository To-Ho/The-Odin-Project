//Check the login exercise
//Write the code which asks for a login with prompt.
//If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”,
//if it’s another string – then show “I don’t know you”.
//The password is checked as follows:
//  If it equals “TheMaster”, then show “Welcome!”,
//  Another string – show “Wrong password”,
//  For an empty string or cancelled input, show “Canceled”
//empty string = '', pressing ESC return null
//Use only if loop
/*
let userName = prompt("Enter your name", '');
if (userName === "Admin") {
    let password = prompt("Enter your password", '');
    if (password === "TheMaster") {
        alert("Welcome");
    }
    else if (password === '' || password === null) {
        alert("Canceled");
    }
    else {
        alert("Wrong password");
    }
}
else if (userName === '' || userName === null) {
    alert("Canceled");
}
else {
    alert("I don't know you");
}
*/

//Use switch loop
/*
let userName = prompt("Enter your name", '');
switch (userName) {
    case "Admin":
        let password =prompt("Enter your password", '');
        switch (password) {
            case "TheMaster":
                alert("Welcome");
                break;
            case '':
            case null:
                alert("Canceled");
                break;
            default:
                alert("Wrong password");
        }
        break;
    case '':
    case null:
        alert("Canceled");
        break;
    default:
        alert("I don't know you");
}
*/

//Ternary (+) Operator
//Write the code which asks: ‘What is the “official” name of JavaScript?’
//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
/*
let questionInput = prompt("What is the \"official\" name of JavaScript?", '');
let message = (questionInput === "ECMAScript") ? "Right" : "You don't know? \"ECMAScript\"!";
alert(message);
*/

//Multiple ternary operator
/*
let login = prompt("Employee role", "");
let message = (login === "Employee") ? "Hello" :
    (login === "Director") ? "Greetings" :
    (login === "") ? "No login" :
    "";
alert(message);
*/

//More switch practice
//Convert number grade to letter grade
let numGrade = prompt("Input number grade", "");
Number(numGrade);
if ((numGrade >= 0) && (numGrade <= 100)) {
    switch (true) { //set to true to always run
        case (numGrade >= 90):
            alert("A");
            break;
        case (numGrade >= 75):
            alert("B");
            break;
        case (numGrade >= 65):
            alert("C");
            break;
        case (numGrade >= 60):
            alert("D");
            break;
        default:
            alert("F");
    }
}
else {
    alert("Invalid input");
}