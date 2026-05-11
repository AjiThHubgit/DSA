/*
=========================================================
FREQUENCY MAPPING PATTERN (ARRAY + STRING)
Easy DSA Interview Problems
=========================================================
Each problem contains:

1. Problem Statement
2. Input
3. Expected Output
4. Solution

Run:
node frequencyMapping.js
=========================================================
*/



// =====================================================
// 1. Character Frequency Count
// =====================================================
/*
Problem:
Given a string, count the frequency of each character.

Input:
"hello"

Expected Output:
{
  h:1,
  e:1,
  l:2,
  o:1
}
*/

function charFrequency(str = "") {

  const map = {}

  for (const ch of str) {

    map[ch] = (map[ch] || 0) + 1

  }

  return map

}

console.log("1 Character Frequency:", charFrequency("hello"))



// =====================================================
// 2. Word Frequency Count
// =====================================================
/*
Problem:
Given a sentence, count the frequency of each word.

Input:
"this is is a test this"

Expected Output:
{
 this:2,
 is:2,
 a:1,
 test:1
}
*/

function wordFrequency(sentence = "") {

  const map = {}
  const words = sentence.split(" ")

  for (const w of words) {

    map[w] = (map[w] || 0) + 1

  }

  return map

}

console.log("2 Word Frequency:", wordFrequency("this is is a test this"))



// =====================================================
// 3. Vowel Frequency Count
// =====================================================
/*
  Problem:
  Count frequency of vowels.

  Input:
  "javascript"

  Expected Output:
  {
  a:2,
  e:0,
  i:1,
  o:0,
  u:0
  }
*/


function frequencyMap(str) {

  let vowels = "aeiou";

  let seen = {};

  for (const ch of vowels) {
    seen[ch] = 0;
  }

  for (const ch of str) {
    if (ch in seen) {
      seen[ch] = seen[ch] + 1;
    }
  }

  return seen;

}

console.log(frequencyMap('javascript'));



function vowelFrequency(str = "") {

  const vowels = "aeiou"

  const map = { a: 0, e: 0, i: 0, o: 0, u: 0 }

  for (const ch of str) {

    if (vowels.includes(ch)) {

      map[ch]++

    }

  }

  return map

}

console.log("3 Vowel Frequency:", vowelFrequency("javascript"))



// =====================================================
// 4. Digit Frequency Count
// =====================================================
/*
Problem:
Given a string containing digits, count frequency.

Input:
"1122334451"

Expected Output:
{
1:3
2:2
3:2
4:2
5:1
}
*/

function digitFrequency(str = "") {

  const map = {}

  for (const ch of str) {

    map[ch] = (map[ch] || 0) + 1

  }

  return map

}

console.log("4 Digit Frequency:", digitFrequency("1122334451"))



// =====================================================
// 5. Case Sensitive Frequency
// =====================================================
/*
Problem:
Uppercase and lowercase counted separately.

Input:
"aAbBcCaa"

Expected Output:
{
a:3
A:1
b:1
B:1
c:1
C:1
}
*/

function caseSensitiveFrequency(str = "") {

  const map = {}

  for (const ch of str) {

    map[ch] = (map[ch] || 0) + 1

  }

  return map

}

console.log("5 Case Frequency:", caseSensitiveFrequency("aAbBcCaa"))



// =====================================================
// 6. First Non-Repeating Character
// =====================================================
/*
Problem:
Return first character that appears once.

Input:
"swiss"

Expected Output:
"w"
*/

function firstNonRepeating(str = "") {

  const map = {}

  for (const ch of str) {

    map[ch] = (map[ch] || 0) + 1

  }

  for (const ch of str) {

    if (map[ch] === 1) return ch

  }

  return ""

}

console.log("6 First Non Repeat:", firstNonRepeating("swiss"))



// =====================================================
// 7. Most Frequent Character
// =====================================================
/*
Problem:
Return the character with highest frequency.

Input:
"javascript"

Expected Output:
"a"
*/

function mostFrequentChar(str = "") {

  const map = {}

  let max = 0
  let result = ""

  for (const ch of str) {

    map[ch] = (map[ch] || 0) + 1

    if (map[ch] > max) {

      max = map[ch]
      result = ch

    }

  }

  return result

}

console.log("7 Most Frequent:", mostFrequentChar("javascript"))



// =====================================================
// 8. Array Element Frequency
// =====================================================
/*
Problem:
Count frequency of numbers in array.

Input:
[1,2,2,3,3,3]

Expected Output:
{
1:1
2:2
3:3
}
*/

function arrayFrequency(arr = []) {

  const map = {}

  for (const num of arr) {

    map[num] = (map[num] || 0) + 1

  }

  return map

}

console.log("8 Array Frequency:", arrayFrequency([1, 2, 2, 3, 3, 3]))



// =====================================================
// 9. Find Duplicate Numbers
// =====================================================
/*
Problem:
Return numbers that appear more than once.

Input:
[1,2,3,2,4,5,1]

Expected Output:
[1,2]
*/

function findDuplicates(arr = []) {

  const map = {}
  const result = []

  for (const num of arr) {

    map[num] = (map[num] || 0) + 1

  }

  for (const key in map) {

    if (map[key] > 1) {

      result.push(Number(key))

    }

  }

  return result

}

console.log("9 Duplicates:", findDuplicates([1, 2, 3, 2, 4, 5, 1]))



// =====================================================
// 10. Find Most Frequent Number
// =====================================================
/*
Problem:
Return number with highest frequency.

Input:
[4,4,1,2,4,2]

Expected Output:
4
*/

function mostFrequentNumber(arr = []) {

  const map = {}

  let max = 0
  let result = null

  for (const num of arr) {

    map[num] = (map[num] || 0) + 1

    if (map[num] > max) {

      max = map[num]
      result = num

    }

  }

  return result

}

console.log("10 Most Frequent Number:", mostFrequentNumber([4, 4, 1, 2, 4, 2]))



// =====================================================
// 11. Check Anagram
// =====================================================
/*
Problem:
Check if two strings are anagrams.

Input:
"listen"
"silent"

Expected Output:
true
*/

function isAnagram(a, b) {

  if (a.length !== b.length) return false

  const map = {}

  for (const ch of a) {

    map[ch] = (map[ch] || 0) + 1

  }

  for (const ch of b) {

    if (!map[ch]) return false

    map[ch]--

  }

  return true

}

console.log("11 Anagram:", isAnagram("listen", "silent"))


// Input:
// ["eat","tea","tan","ate","nat","bat"]

// Output:
// [["eat","tea","ate"],["tan","nat"],["bat"]]

function groupAnagrams(arr) {

  const map = {};

  for (const word of arr) {

    const key = word.split('').sort().join('');

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(word);

  }

  return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));



// =====================================================
// 12. Count Occurrences of Each Number
// =====================================================
/*
Problem:
Count occurrences of each number.

Input:
[5,6,5,7,6,5]

Expected Output:
{
5:3
6:2
7:1
}
*/

function numberFrequency(arr = []) {

  const map = {}

  for (const num of arr) {

    map[num] = (map[num] || 0) + 1

  }

  return map

}

console.log("12 Number Frequency:", numberFrequency([5, 6, 5, 7, 6, 5]))



/*
=========================================================
END OF FILE
=========================================================
*/