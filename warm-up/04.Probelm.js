// Write a function that accepts a number and checks whether it is Even or Odd. If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. Test the function with inputs 18 and 5.

function checkTheNumberIsEvenOROdd(num) {
    let rem = num % 2; // return remainder

    if (rem === 0) {
        console.log("it's an Even number");
    } else {
        console.log("it's an Odd number");
    }
}

checkTheNumberIsEvenOROdd(18);
checkTheNumberIsEvenOROdd(5);