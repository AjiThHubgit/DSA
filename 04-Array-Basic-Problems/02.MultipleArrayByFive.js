// input: [2, 4, 7, 9]
// output: [10, 20, 35, 45]

const input = [2, 4, 7, 9];

// Find the Data Structure - Array DS

function MultipleArrayByFive(input) { // parameters

    let result = [];

    for (let i = 0; i < input.length; i++) {
        result.push(input[i] * 5)
    }

    return result;
}

console.log(MultipleArrayByFive(input)); // arguments