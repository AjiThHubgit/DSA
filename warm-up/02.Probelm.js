// Write a function that takes an integer and returns its square. Call this function and prints the result. Square(x) is a function that computes the square of a number. It returns the result instead of printing it.

function square(num) {
    let result = num * num;
    return result;
}

const value = square(3);
console.log(value);