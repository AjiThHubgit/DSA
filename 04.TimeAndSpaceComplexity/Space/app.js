// ⏱️ Time & 🧠 Space Complexity (with Examples)

// 1️⃣ Constant Space — O(1) Space

// Problem: Find sum of two numbers

function sum(a, b) {
  return a + b;
}

sum(10, 20);


// Time Complexity

//  - Only one operation

//  - ⏱ O(1)

// Space Complexity

//  - Uses only variables a, b

//  - No extra memory grows with input

//  - 🧠 O(1)


// 2️⃣ Linear Space — O(n) Space

// Problem: Copy elements of an array

function copyArray(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

copyArray([1, 2, 3, 4]);


// Time Complexity

//  - Loop runs n times

//  - ⏱ O(n)

// Space Complexity

//  - New array of size n

//  - 🧠 O(n)

//  - 📌 Space increases linearly with input size



// 3️⃣ Linear Time, Constant Space — O(n) Time & O(1) Space
// Problem: Find maximum number in array


function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

findMax([3, 7, 2, 9, 5]);


// Time Complexity

//  - Loop runs n times

//  - ⏱ O(n)

// Space Complexity

//  - Only one variable max

//  - 🧠 O(1)

// 💡 Very common interview pattern


// 4️⃣ Quadratic Time, Constant Space — O(n²) Time & O(1) Space
// Problem: Print all pairs

function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

printPairs([1, 2, 3]);


// Time Complexity

//  - Nested loops → n × n

//  - ⏱ O(n²)

// Space Complexity

//  - No extra data structure

//  - 🧠 O(1)

// ⚠️ Time is bad, space is fine


// 5️⃣ Logarithmic Time, Constant Space — O(log n) Time & O(1) Space
// Problem: Binary Search


function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

binarySearch([10, 20, 30, 40, 50], 30);


// Time Complexity

// - Halves input every step

// - ⏱ O(log n)

// Space Complexity

// - Only pointers (left, right, mid)

// - 🧠 O(1)

// ✅ Efficient in both time & space



// 6️⃣ Recursion — O(n) Time & O(n) Space
// Problem: Factorial using recursion


function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(5);



// Time Complexity

//  - Function called n times

//  - ⏱ O(n)

// Space Complexity

//  - Call stack stores n calls

//  - 🧠 O(n)

// 📌 Recursion uses extra stack space


// 7️⃣ Exponential Time & Space — O(2ⁿ)
// Problem: Fibonacci (naive recursion)


function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(5);


// Time Complexity

//  - Two recursive calls each time

//  - ⏱ O(2ⁿ)

// Space Complexity

//  - Recursive call stack

//  - 🧠 O(n)

// - ❌ Very inefficient


// | Problem Type  | Time     | Space |
// | ------------- | -------- | ----- |
// | Simple calc   | O(1)     | O(1)  |
// | Loop          | O(n)     | O(1)  |
// | New array     | O(n)     | O(n)  |
// | Nested loops  | O(n²)    | O(1)  |
// | Binary search | O(log n) | O(1)  |
// | Recursion     | O(n)     | O(n)  |
// | Exponential   | O(2ⁿ)    | O(n)  |
