/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const start = new Date();
    let sum = 0;
    for( let i = 1; i <= n; i++){
        sum += i;
    }
    const end = new Date();
    const timeElapsed = (end - start) / 1000;   // div by 1000 to convert millisec to sec
    console.log(timeElapsed);
    return {sum, timeElapsed};
}

const result1 = calculateTime(100);
console.log(`Sum: ${result1.sum}, Time: ${result1.timeElapsed} seconds`);

const result2 = calculateTime(100000);
console.log(`Sum: ${result2.sum}, Time: ${result2.timeElapsed} seconds`);

const result3 = calculateTime(1000000000);
console.log(`Sum: ${result3.sum}, Time: ${result3.timeElapsed} seconds`);
