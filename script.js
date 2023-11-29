/*ccomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number*/


let i = 100;

for (let i = 1; i <= 100; i++) {

    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FIZZBUZZ");
    }
    else if (i % 3 === 0) {
        console.log("FIZZ");
    } else if (i % 5 === 0) {
        console.log("BUZZ");
    }
    else {
        console.log(i);
    }

}


////Part 2
/** 
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
*/
for (let i = 1; i < 200; i++) {
    let isPrime = true;
    let n = 84;
    for (let j = 2; j < i; j++) {

        if (i % j === 0) {
            // if this is true, it is NOT a prime number
            isPrime = false;
            break;
        }
    }

    if (isPrime === true && i > n) {
        console.log(i);
        break;
    }
}


///Part 3 Part 3: Feeling Loopy

const string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let row = 1;
let counter = 1;
for (let i = 0; i < string.length; i++) {
    if (string[i] === ',') {
        counter += 1;
    }
    if (string[i] === '\n') {
        console.log("Row: ", row);
        row += 1;
        console.log(cell1, cell2, cell3, cell4);
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
        counter = 1;
        continue;
    }

    if (counter === 1) {
        cell1 = cell1 + string[i];
        // console.log(cell1);
        //add in cell 1
    }
    if (counter === 2) {
        cell2 = cell2 + string[i];
        //add in cell 2
    }
    if (counter === 3) {
        cell3 = cell3 + string[i];
        //add in cell 3
    }
    if (counter === 4) {
        cell4 = cell4 + string[i];
        //add in cell 3
    }

}
console.log(cell1, cell2, cell3, cell4);
