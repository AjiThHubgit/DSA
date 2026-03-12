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




function countNegatives(arr) {
  if (!Array.isArray(arr)) return 0;

  let count = 0;

  for (const num of arr) {
    if (num < 0) count++;
  }

  return count;
}



function countNegatives(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    }

    let count = 0;

    for (let value of arr) {
        if (typeof value === "number" && value < 0) {
            count++;
        }
    }

    return count;
}




const countNegatives = (arr) =>
  Array.isArray(arr) ? arr.filter(num => num < 0).length : 0;

console.log(countNegatives(arr));





const countNegatives = (arr) => {
  if (!Array.isArray(arr)) return 0;

  return arr.reduce((count, num) => (num < 0 ? count + 1 : count), 0);
};



