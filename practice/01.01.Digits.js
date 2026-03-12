// Math.floor - rounds down
// Math.ceil - rounds up
// Math.abs - change negative number to negative number
// Math.round

// Math.round(-Infinity); // -Infinity
// Math.round(-20.51); // -21
// Math.round(-20.5); // -20
// Math.round(-0.1); // -0
// Math.round(0); // 0
// Math.round(20.49); // 20
// Math.round(20.5); // 21
// Math.round(42); // 42
// Math.round(Infinity); // Infinity

// Write a function countDigits(n)that takes an integer n and returns how many digits it contains.

function countDigits(n) {
    let count = 0;

    if (n === 0) return 1;

    n = Math.abs(n);

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

}

countDigits(428);
countDigits(0);
countDigits(-396);



// Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.

function isPalindrome(x) {
    let nCopy = x;
    let rem = 0;
    let rev = 0;
    
    while(x > 0) {
        rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }
    
    return nCopy === rev;
    
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));



// Write a function To reverse a number 

function reverse(n) {
    let nCopy = n;
    let rem = 0;
    let rev = 0;
    
    n = Math.abs(n);
    
    while(n > 0) {
        rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }
    
    return nCopy < 0 ? -rev : rev;
    
}

console.log(reverse(2434));
console.log(reverse(2434));