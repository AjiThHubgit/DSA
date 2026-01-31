/*

1. Input n = 5
2. output

1
01
010
1010
10101

*/


let n = 5;
let toggle = 1;

for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < i + 1; j++) {
        row = row + toggle;

        // switch the toggle
        if (toggle === 1) {
            toggle = 0;
        } else {
            toggle = 1
        }
    }

    console.log(row);
}