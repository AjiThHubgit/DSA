/*
=====================================================
TWO POINTER PATTERN PROBLEMS (JavaScript)
=====================================================

Problems Included:

1. Reverse a String
2. Check Palindrome
3. Two Sum (Sorted Array)
4. Remove Duplicates (Sorted Array)
5. Move Zeros
6. Reverse Words in Sentence
7. Container With Most Water
8. Valid Palindrome (Ignore symbols)
9. Squares of Sorted Array
10. Remove Element

Run: node twoPointer.js
=====================================================
*/


/*
-----------------------------------------------------
1. Reverse a String
-----------------------------------------------------

Problem:
Reverse the given string.

Input:
"hello"

Output:
"olleh"
*/

function reverseString(str) {
    let arr = str.split("");
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join("");
}

console.log("1 Reverse String:", reverseString("hello"));



/*
-----------------------------------------------------
2. Check Palindrome
-----------------------------------------------------

Problem:
Check if the string is palindrome.

Input:
"madam"

Output:
true
*/

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
}

console.log("2 Palindrome:", isPalindrome("madam"));



/*
-----------------------------------------------------
3. Two Sum (Sorted Array)
-----------------------------------------------------

Problem:
Find two numbers that add up to target.

Input:
arr = [1,2,3,4,6]
target = 6

Output:
[2,4]
*/

function twoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) return [arr[left], arr[right]];
        if (sum < target) left++;
        else right--;
    }

    return [];
}

console.log("3 Two Sum:", twoSum([1, 2, 3, 4, 6], 6));


// Without Sorted Array

function findTarget(arr, target) {

    let map = {};

    for (let i = 0; i < arr.length; i++) {

        let complement = target - arr[i];

        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        map[arr[i]] = i;
        console.log(map);
    }

    return null;
}

console.log(findTarget([1,2,3,4,6], 9));



/*
-----------------------------------------------------
4. Remove Duplicates (Sorted Array)
-----------------------------------------------------

Problem:
Remove duplicates in sorted array.

Input:
[1,1,2,2,3,4]

Output:
[1,2,3,4]
*/

function removeDuplicates(arr) {

    let left = 0;

    for (let right = 1; right < arr.length; right++) {

        if (arr[left] !== arr[right]) {
            left++;
            arr[left] = arr[right];
        }

    }

    return arr.slice(0, left + 1);
}

console.log("4 Remove Duplicates:", removeDuplicates([1, 1, 2, 2, 3, 4]));



/*
-----------------------------------------------------
5. Move Zeros
-----------------------------------------------------

Problem:
Move all zeros to the end.

Input:
[0,1,0,3,12]

Output:
[1,3,12,0,0]
*/

function moveZeros(arr) {

    let left = 0;

    for (let right = 0; right < arr.length; right++) {

        if (arr[right] !== 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }

    }

    return arr;
}

console.log("5 Move Zeros:", moveZeros([0, 1, 0, 3, 12]));



/*
-----------------------------------------------------
6. Reverse Words in Sentence
-----------------------------------------------------

Problem:
Reverse order of words.

Input:
"I love javascript"

Output:
"javascript love I"
*/

function reverseWords(sentence) {

    let arr = sentence.split(" ");
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;

    }

    return arr.join(" ");
}

console.log("6 Reverse Words:", reverseWords("I love javascript"));



/*
-----------------------------------------------------
7. Container With Most Water
-----------------------------------------------------

Problem:
Find maximum water container.

Input:
[1,8,6,2,5,4,8,3,7]

Output:
49
*/

function maxArea(height) {

    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {

        let area = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }

    }

    return max;
}

console.log("7 Max Water:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));



/*
-----------------------------------------------------
8. Valid Palindrome (Ignore symbols)
-----------------------------------------------------

Problem:
Check palindrome ignoring special characters.

Input:
"A man, a plan, a canal: Panama"

Output:
true
*/

function validPalindrome(str) {

    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right = str.length - 1;

    while (left < right) {

        if (str[left] !== str[right]) return false;

        left++;
        right--;

    }

    return true;
}

console.log("8 Valid Palindrome:", validPalindrome("A man, a plan, a canal: Panama"));



/*
-----------------------------------------------------
9. Squares of Sorted Array
-----------------------------------------------------

Problem:
Return sorted squares.

Input:
[-4,-1,0,3,10]

Output:
[0,1,9,16,100]
*/

function sortedSquares(arr) {

    let left = 0;
    let right = arr.length - 1;
    let result = new Array(arr.length);
    let index = arr.length - 1;

    while (left <= right) {

        let leftSq = arr[left] * arr[left];
        let rightSq = arr[right] * arr[right];

        if (leftSq > rightSq) {
            result[index] = leftSq;
            left++;
        } else {
            result[index] = rightSq;
            right--;
        }

        index--;

    }

    return result;
}

console.log("9 Sorted Squares:", sortedSquares([-4, -1, 0, 3, 10]));



/*
-----------------------------------------------------
10. Remove Element
-----------------------------------------------------

Problem:
Remove all occurrences of a value.

Input:
nums = [3,2,2,3]
val = 3

Output:
[2,2]
*/

function removeElement(nums, val) {

    let left = 0;

    for (let right = 0; right < nums.length; right++) {

        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }

    }

    return nums.slice(0, left);
}

console.log("10 Remove Element:", removeElement([3, 2, 2, 3], 3));



/*
=====================================================
END OF FILE
=====================================================
*/