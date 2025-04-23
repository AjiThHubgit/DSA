// input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// output: {odd: 5, even: 5}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Find the Data Structure - Object DS

function CountOddAndEvenNumber(input) { // parameter

    let result = {odd: 0, even: 0}

    for (let i = 0; i < input.length; i++) {
        
        if (input[i] % 2 === 0) {
            result.odd += 1;
        } else {
            result.even += 1;
        }
    }

    return result;
}

console.log(CountOddAndEvenNumber(input)) // arguments