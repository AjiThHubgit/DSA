// Write a function that returns the largest number in an array.

let arr = [5, 7, 21, 9, 16, 3];

function findLargest(arr) {
    let largest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(findLargest(arr));



function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid Input";
  }

  let largest = -Infinity;

  for (const num of arr) {
    if (num > largest) largest = num;
  }

  return largest;
}
