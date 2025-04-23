// input: [1, 32, 4, 65, 7, 8, 0];
// output: 65

const input = [1, 32, 4, 65, 7, 8, 0];


// Find the Data Structure - primitive Number DS;

function LargestElementInAnArray(input) { // parameter

    let result = input[0];

    for (let i = 0; i < input.length; i++) {

        if (result < input[i]) {
            result = input[i];
        }
    }

    return result;

}

console.log(LargestElementInAnArray(input)); // arguments