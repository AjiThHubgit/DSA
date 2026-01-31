// Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.

function isPalindrome(x) {

    if (x < 0) return false;

    let xCopy = x;
    let reverse = 0;
    let remainder = 0;

    while (xCopy > 0) {
        remainder = xCopy % 10;
        reverse = (reverse * 10) + remainder;
        xCopy = Math.floor(xCopy / 10);
    }

    return x === reverse;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));