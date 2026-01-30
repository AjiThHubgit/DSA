// Write a function that returns the number of negative numbers in an array.

let arr = [10, -3, 7, -1, 5, 10, -9];

function countNegatives(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count = count + 1;
        }
    }

    return count;
}

console.log(countNegatives(arr));