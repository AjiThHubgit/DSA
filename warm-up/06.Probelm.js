// Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1.

let arr = [8, 3, 5, 9, 2, 12]

function searchElement(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return i;
        }
    }
    return -1;
}


console.log(searchElement(arr, 8));
console.log(searchElement(arr, 20));
console.log(searchElement(arr, 3));
console.log(searchElement(arr, 5));
console.log(searchElement(arr, 100));