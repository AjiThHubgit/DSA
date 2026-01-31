// Write a function that returns the smallest number in an array.

let arr = [12, 3, 5, 7, 1, 15, 2];

function findSmallest(arr) {
    let smallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

console.log(findSmallest(arr));