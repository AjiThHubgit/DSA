// Write a recursive program to find the sum of digits of a number.

// Example:

// Input: 342

// Output: 9



// Example 2:
// Input: 34534

// Ouput: 19

const input = 342;

function SumOfDigits(n) {
    if (n === 0) return 0; // base case

    return (n % 10) + SumOfDigits(Math.floor(n / 10)); // last digit + recursive call
}

console.log(SumOfDigits(input)); // Output: 19