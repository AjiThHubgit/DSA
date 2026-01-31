// 1️⃣ Linear Search — O(n)

// Idea: Check elements one by one until found.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // found
        }
    }
    return -1; // not found
}

linearSearch([10, 20, 30, 40], 30);

// Explanation

// - In worst case, element is at the end or not present.

// - Checks n elements  

// - ⏱ Time complexity: O(n)



// 2️⃣ Binary Search — O(log n)

// Idea: Divide the array into half every time
// ⚠️ Array must be sorted


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

binarySearch([10, 20, 30, 40, 50], 40);

// Explanation

// - Every step reduces search space by half

// - For 16 elements → max 4 steps

// - ⏱ Time complexity: O(log n)



// 3️⃣ Nested Loop — O(n²)

// Idea: Loop inside another loop

function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

printPairs([1, 2, 3]);



// Explanation

// - Outer loop → n times

// - Inner loop → n times

// - Total operations → n × n

// - ⏱ Time complexity: O(n²)



// 4️⃣ Merge Sort — O(n log n)

// Idea: Divide → Sort → Merge

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  return result.concat(left, right);
}

mergeSort([5, 3, 8, 2]);



// Explanation

// - Divide array → log n

// - Merge elements → n

// - ⏱ Time complexity: O(n log n)



// 5️⃣ Triple Nested Loop — O(n³)


function tripleLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        console.log(arr[i], arr[j], arr[k]);
      }
    }
  }
}

tripleLoop([1, 2]);



// Explanation

// - 3 loops → n × n × n

// - Very slow for large inputs

// - ⏱ Time complexity: O(n³)



// 6️⃣ Exponential — O(2ⁿ)

// Idea: Each call creates two more calls

// Example (Fibonacci)



function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(5);


// Explanation

// Every function call branches into 2 calls

// Grows extremely fast

// ⏱ Time complexity: O(2ⁿ)



// 7️⃣ Factorial — O(n!)

// Idea: Generate all permutations


function permutations(arr) {
  if (arr.length === 0) return [[]];

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (let perm of permutations(rest)) {
      result.push([arr[i], ...perm]);
    }
  }
  return result;
}

permutations([1, 2, 3]);



// Explanation

// - For n elements → n! permutations

// - Extremely slow

// - ⏱ Time complexity: O(n!)


// 8️⃣ Constant Time — O(1)

// Idea: Always takes same time, no matter input size


function getFirstElement(arr) {
  return arr[0];
}

// getFirstElement([10, 20, 30]);

// Explanation

// - One operation only

// - ⏱ Time complexity: O(1)





// | Complexity | Meaning           |
// | ---------- | ----------------- |
// | O(1)       | Constant          |
// | O(log n)   | Divide & conquer  |
// | O(n)       | Linear            |
// | O(n log n) | Efficient sorting |
// | O(n²)      | Nested loops      |
// | O(n³)      | Triple loops      |
// | O(2ⁿ)      | Exponential       |
// | O(n!)      | Factorial         |













