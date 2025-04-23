// input: [1, 2, 3, 4, 5]
// output: 15

const input = [1, 2, 3, 4, 5];

function SumOfArrayElements(input) { //parameters

    let result = 0;

    for (let i = 0; i < input.length; i++) {
        result += input[i];
    }

    return result;
}

console.log(SumOfArrayElements(input)); //arguments