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