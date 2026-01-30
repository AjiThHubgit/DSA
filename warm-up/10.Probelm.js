// Write a function that returns the second largest number in an array.


let arr = [10, 3, 5, 1, 9, 12, 20, 20];

function findSecondLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (firstLargest < arr[i]) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (secondLargest < arr[i] && arr[i] !== secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

console.log(findSecondLargest(arr));