// Write a recursive algorithm to find the count of digits in a number.

// Example:
// Input: 353445

// Outpput: 6

// Example 2 :

// Input: 53543

// Output: 5

let input = 5344543;

function CountNumbersRecursive(num) {
    if (num === 0) return 0; // base case

    return 1 + CountNumbersRecursive(Math.floor(num / 10)); // recursive case
}

console.log(CountNumbersRecursive(input)); // Output: 7
