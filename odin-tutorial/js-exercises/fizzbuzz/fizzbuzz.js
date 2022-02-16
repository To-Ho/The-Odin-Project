//Fizzbuzz
//Print out 1 till the inputed number
//If input %3 = 0, then print fizz
//If input %5 = 0, then print buzz
//If input %3 AND %5 = 0then print fizzbuzz
let userInput = parseInt(prompt('Input', ''));

//To complex
/*
for(let i = 1; i <= userInput; i++) {
    if ((i % 3 === 0) && (i % 5 !== 0)) {
        console.log('fizz');
    } else if ((i % 5 === 0) && (i % 3 !== 0)) {
        console.log('buzz');
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('fizzbuzz');
    } else {
        console.log(i);
    }
}
*/

//Better
for(let i = 1; i <= userInput; i++) {
    if((i % 3 === 0) && (i % 5 === 0)) { //JS runs by order
        console.log('fizzbuzz');
    }
    if (i % 3 === 0) { //No need for the second && (i % 5 !== 0)
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }
}