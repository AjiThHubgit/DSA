// Remove Dublicate Number In Place Non-Decrecing Order

function RemoverDublicate(arr) {

    let p = 0;

    for (let i = 0; i < arr.length; i++) {

        //    arr[i] > arr[p] (or) arr[i] !== arr[p]
        if (arr[i] > arr[p]) {
            p = p + 1;
            arr[p] = arr[i];
        }

    }

}

const len = RemoverDublicate([0, 0, 1, 1, 1, 2, 2, 3, 4]);
const result = len.slice(0, len)
console.log(result);





function removeKeyValue(arr, key) {
    let p = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== key) {
            arr[p] = arr[i];
            p++;
        }
    }

    return arr.slice(0, p);
}

const arr = [1, 2, 5, 3, 2, 10, 12, 2, 9];
console.log(removeKeyValue(arr, 2));


// My Approch

function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let p = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = p;
    }

    return arr;
}

console.log(reverseArrayInPlace(['D', 'C', 'B', 'A', 'Z']));

// Good Approch

function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}


// moveZeroAtEnd


// With Extra Memory

function moveZeroAtEnd(arr) {
    
    let newArr = [];
    
    for (let n of arr) {
       if (n !== 0) newArr.push(n);
    }
    
    for (let i = newArr.length - 1; i < arr.length - 1; i++) {
        newArr.push(0);
    }
    
    return newArr;
    
}

let arr = [0,1];
console.log(moveZeroAtEnd(arr));




// https://leetcode.com/problems/max-consecutive-ones

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) count = count + 1;
        else {
            max = Math.max(count, max);
            count = 0;
        }
    }

    return Math.max(count, max);
};



// https://leetcode.com/problems/missing-number/ 
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let totalSum = n * (n + 1) / 2;

    let partialSum = 0;
    for (let num of nums) {
        partialSum += num;
    }

    return totalSum - partialSum;
};

function findMisssingNumber(arr) {

    let n = arr.length + 1;

    let totalSum = n * (n + 1) / 2;

    let partialTotal = 0;

    for (const num of arr) {
        partialTotal += num;
    }

    return totalSum - partialTotal;
}

console.log(findMisssingNumber([1, 2, 4, 5])); // 3