// ===============================
// 1. Sum of Two Numbers
// ===============================
function sumOfTwoNumbers(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) return "Invalid Input";
    return a + b;
}

console.log(sumOfTwoNumbers(5, 6));
console.log(sumOfTwoNumbers(5, "6"));


// ===============================
// 2. Square of a Number
// ===============================
function squareOfNumber(num) {
    if (!Number.isFinite(num)) return "Invalid Input";
    return num * num;
}

console.log(squareOfNumber(3));
console.log(squareOfNumber("3"));


// ===============================
// 3. Voting Eligibility
// ===============================
function checkVotingEligibility(age) {
    if (!Number.isFinite(age) || age < 0) return "Invalid Input";
    return age >= 18 ? "Eligible To Vote" : "Not Eligible To Vote";
}

console.log(checkVotingEligibility(18));
console.log(checkVotingEligibility(12));
console.log(checkVotingEligibility("28"));


// ===============================
// 4. Even or Odd
// ===============================
function checkEvenOrOdd(num) {
    if (!Number.isFinite(num)) return "Invalid Input";
    return num % 2 === 0 ? "Even Number" : "Odd Number";
}

console.log(checkEvenOrOdd(13));
console.log(checkEvenOrOdd(12));
console.log(checkEvenOrOdd("22"));


// ===============================
// 5. Get All Even Numbers from Array
// ===============================
function getEvenNumbers(arr) {
    if (!Array.isArray(arr)) return "Invalid Input";

    let result = [];
    for (let val of arr) {
        if (Number.isFinite(val) && val % 2 === 0) {
            result.push(val);
        }
    }
    return result;
}

console.log(getEvenNumbers([2, 3, 4, 5, 6, 7, 8]));
console.log(getEvenNumbers("hello"));


// ===============================
// 6. Search Element in Array
// ===============================
function searchElement(arr, key) {
    if (!Array.isArray(arr)) return "Invalid Input";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) return i;
    }
    return -1;
}

console.log(searchElement([3, 4, 5, 6, 8, 12], 8));
console.log(searchElement([1, 2, 3], 9));
console.log(searchElement(123, 8));


// ===============================
// 7. Count Negative Numbers
// ===============================
function countNegatives(arr) {
    if (!Array.isArray(arr)) return "Invalid Input";

    let count = 0;
    for (let val of arr) {
        if (Number.isFinite(val) && val < 0) count++;
    }
    return count;
}

console.log(countNegatives([2, -2, 4, -3, 6, -4]));
console.log(countNegatives("abc"));


// ===============================
// 8. Largest Number in Array
// ===============================
function findLargest(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return "Invalid Input";

    let max = -Infinity;
    for (let val of arr) {
        if (Number.isFinite(val) && val > max) {
            max = val;
        }
    }

    return max === -Infinity ? "No valid numbers" : max;
}

console.log(findLargest([3, 6, 10, 1, 2, 7]));
console.log(findLargest([]));


// ===============================
// 9. Smallest Number in Array
// ===============================
function findSmallest(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return "Invalid Input";

    let min = Infinity;
    for (let val of arr) {
        if (Number.isFinite(val) && val < min) {
            min = val;
        }
    }

    return min === Infinity ? "No valid numbers" : min;
}

console.log(findSmallest([3, 6, 10, 1, 2, 7]));
console.log(findSmallest([]));


// ===============================
// 10. Second Largest Number
// ===============================
function findSecondLargest(arr) {
    if (!Array.isArray(arr)) return "Invalid Input";
    if (arr.length < 2) return "Need at least 2 elements";

    let first = -Infinity;
    let second = -Infinity;

    for (let val of arr) {
        if (!Number.isFinite(val)) continue;

        if (val > first) {
            second = first;
            first = val;
        } else if (val > second && val !== first) {
            second = val;
        }
    }

    return second === -Infinity ? "No second largest" : second;
}

console.log(findSecondLargest([2, 6, 11, 5, 13, 1, 4]));
console.log(findSecondLargest([5, 5, 5]));
console.log(findSecondLargest([10]));
console.log(findSecondLargest([-5, -2, -10]));




// !Number.isFinite(num)


// It filters:

// Strings

// NaN

// Infinity

// null

// undefined


// Why Not Just typeof num === "number" ?

// typeof NaN === "number" // true ❌
// typeof Infinity === "number" // true ❌


// Number.isFinite(10)        // true
// Number.isFinite(-5)        // true
// Number.isFinite(3.14)      // true

// Number.isFinite("10")      // false
// Number.isFinite(NaN)       // false
// Number.isFinite(Infinity)  // false
// Number.isFinite(undefined) // false


// for (let i = 0; i < 3; i++) {
//     console.log("i "+ i);
//     for (let j = 0; j < 3; j++) {
//         console.log("i "+ i +" = "+ j);
//     }
// }


// for (let i = 0; i < 3; i++) {
//     console.log("i "+ i);
//     for (let j = 0; j < i; j++) {
//         console.log('i '+ i +' = j '+ j);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     console.log('i =', i);

//     for (let j = 0; j <= i; j++) {
//         console.log('i ='+ i +' j = '+ j);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     console.log('i = ', i);

//     for (let j = i; j > 0; j--) {
//         console.log('j = ', j);
//     }
// }


// for (let i = 0; i < 3; i++) {
//     console.log('i = ', i);

//     for (let j = i; j >= 0; j--) {
//         console.log('j = ', j);
//     }
// }


// for (let i = 5; i > 0; i--) {
//     console.log('i = ', i);

//     for (let j = 0; j < i; j++) {
//         console.log('j = ', j);
//     }
// }