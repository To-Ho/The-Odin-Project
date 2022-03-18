//Repeat untill enter a number > 100
/*
let num;
do {
    num = prompt('Enter a number greater than 100', 0); //Do not have to declare num everyloop
} while (num <= 100 && num); //check num for null and empty string
*/

//Output prime numbers till input number
/*
let num;
let result = [];
num = prompt('Enter a number', 0)
firstloop: for(let i = 2; i <= num; i++) {
    for (let  numCheck = 2; numCheck < i; numCheck++) {
        if(i % numCheck == 0) {
            continue firstloop;
        }
    }   
    result.push(i);
}

alert(result.toString());
*/