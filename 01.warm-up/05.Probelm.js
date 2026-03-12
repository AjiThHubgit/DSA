// Write a program to print all even numbers from an array.

const arr = [10, 3, 5, 2, 7, 6, 9];

function printAllEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        const rem = arr[i] % 2;

        if (rem === 0) {
            console.log(arr[i]);
        }

    }
}

printAllEvenNumbers(arr);



// const arr = [10, 3, 5, 2, 7, 6, 9];

// function printAllEvenNumbers(arr) {

//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// console.log(printAllEvenNumbers(arr));




// const getEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

// console.log(getEvenNumbers([10, 3, 5, 2, 7, 6, 9]));



// function getEvenNumbers(arr) {
//   if (!Array.isArray(arr)) {
//     return "Invalid Input";
//   }

//   return arr.filter(num => typeof num === "number" && num % 2 === 0);
// }