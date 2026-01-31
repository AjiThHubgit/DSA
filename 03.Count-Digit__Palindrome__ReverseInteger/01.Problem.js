// Write a function that returns the count of digits in a number

// Math.floor - down the value
// Math.round - roundOff
// Math.abs(n) - it change negative number to positive number

// console.log(Math.trunc(-13.37)); // -13
// console.log(Math.floor(-13.37)); // -14

function countDigits(n) {
    let count = 0;

    if (n === 0) return 1;
    n = Math.abs(n);

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

console.log(countDigits(259));
console.log(countDigits(-23));
console.log(countDigits(0));