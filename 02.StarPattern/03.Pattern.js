/*

1. Input n = 4
2. output

1
12
123
1234

*/

let n = 4;

for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < i + 1; j++) {
        row = row + (j + 1);
    }

    console.log(row);
}

// let j = 0; j <= i; j++
// let j = 0; j < i + 1; j++