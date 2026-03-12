/*
=====================================================
SEARCH PATTERN PROBLEMS
Linear Search + Binary Search
=====================================================

Each problem includes:
1. Problem Statement
2. Input
3. Expected Output
4. Solution

Run:
node searchPatterns.js
=====================================================
*/



// =====================================================
// 1. Find Element in Array
// =====================================================
/*
Problem:
Find the index of a given element in an array.

Input:
arr = [4,7,1,9,3]
target = 9

Expected Output:
3
*/

function findElement(arr, target) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) {

            return i

        }

    }

    return -1

}

console.log("1 Find Element:", findElement([4, 7, 1, 9, 3], 9))

// Search Type: Linear Search




// =====================================================
// 2. Check if Number Exists
// =====================================================
/*
Problem:
Check whether a number exists in array.

Input:
arr=[5,3,8,2]
target=8

Output:
true
*/

function numberExists(arr, target) {

    for (const num of arr) {

        if (num === target) return true

    }

    return false

}

console.log("2 Number Exists:", numberExists([5, 3, 8, 2], 8))

// Search Type: Linear Search




// =====================================================
// 3. Find Maximum Element
// =====================================================
/*
Problem:
Find the maximum number in array.

Input:
[3,7,2,9,5]

Output:
9
*/

function findMax(arr) {

    let max = arr[0]

    for (const num of arr) {

        if (num > max) {

            max = num

        }

    }

    return max

}

console.log("3 Max Element:", findMax([3, 7, 2, 9, 5]))

// Search Type: Linear Search




// =====================================================
// 4. Count Occurrences
// =====================================================
/*
Problem:
Count how many times a number .

Input:appears
arr=[1,2,3,2,2,4]
target=2

Output:
3
*/

function countOccurrences(arr, target) {

    let count = 0

    for (const num of arr) {

        if (num === target) count++

    }

    return count

}

console.log("4 Count Occurrence:", countOccurrences([1, 2, 3, 2, 2, 4], 2))

// Search Type: Linear Search




// =====================================================
// 5. First Occurrence
// =====================================================
/*
Problem:
Find first occurrence of element.

Input:
arr=[5,2,3,2,4]
target=2

Output:
1
*/

function firstOccurrence(arr, target) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) return i

    }

    return -1

}

console.log("5 First Occurrence:", firstOccurrence([5, 2, 3, 2, 4], 2))

// Search Type: Linear Search




// =====================================================
// 6. Binary Search
// =====================================================
/*
Problem:
Find element in sorted array.

Input:
arr=[1,3,5,7,9]
target=7

Output:
3
*/

function binarySearch(arr, target) {

    let left = 0
    let right = arr.length - 1

    while (left <= right) {

        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) return mid

        if (arr[mid] < target) {

            left = mid + 1

        } else {

            right = mid - 1

        }

    }

    return -1

}

console.log("6 Binary Search:", binarySearch([1, 3, 5, 7, 9], 7))

// Search Type: Binary Search




// =====================================================
// 7. Find Floor Value
// =====================================================
/*
Problem:
Find largest number <= target.

Input:
arr=[1,3,5,7,9]
target=6

Output:
5
*/

function findFloor(arr, target) {

    let left = 0
    let right = arr.length - 1
    let result = -1

    while (left <= right) {

        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) return arr[mid]

        if (arr[mid] < target) {

            result = arr[mid]
            left = mid + 1

        } else {

            right = mid - 1

        }

    }

    return result

}

console.log("7 Floor Value:", findFloor([1, 3, 5, 7, 9], 6))

// Search Type: Binary Search




// =====================================================
// 8. Find Ceil Value
// =====================================================
/*
Problem:
Find smallest number >= target.

Input:
arr=[1,3,5,7,9]
target=6

Output:
7
*/

function findCeil(arr, target) {

    let left = 0
    let right = arr.length - 1
    let result = -1

    while (left <= right) {

        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) return arr[mid]

        if (arr[mid] > target) {

            result = arr[mid]
            right = mid - 1

        } else {

            left = mid + 1

        }

    }

    return result

}

console.log("8 Ceil Value:", findCeil([1, 3, 5, 7, 9], 6))

// Search Type: Binary Search




// =====================================================
// 9. Search Insert Position
// =====================================================
/*
Problem:
Find position where target should be inserted.

Input:
arr=[1,3,5,6]
target=2

Output:
1
*/

function searchInsert(arr, target) {

    let left = 0
    let right = arr.length - 1

    while (left <= right) {

        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) return mid

        if (arr[mid] < target) {

            left = mid + 1

        } else {

            right = mid - 1

        }

    }

    return left

}

console.log("9 Insert Position:", searchInsert([1, 3, 5, 6], 2))

// Search Type: Binary Search




// =====================================================
// 10. Square Root using Binary Search
// =====================================================
/*
Problem:
Find integer square root.

Input:
x = 16

Output:
4
*/

function squareRoot(x) {

    let left = 0
    let right = x
    let ans = 0

    while (left <= right) {

        let mid = Math.floor((left + right) / 2)

        if (mid * mid <= x) {

            ans = mid
            left = mid + 1

        } else {

            right = mid - 1

        }

    }

    return ans

}

console.log("10 Square Root:", squareRoot(16))

// Search Type: Binary Search



/*
=====================================================
END OF SEARCH PATTERN MODULE
=====================================================
*/