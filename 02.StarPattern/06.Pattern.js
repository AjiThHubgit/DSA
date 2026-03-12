/*

1. Input n = 5
2. output

====*
===**
==***
=****
*****

*/


let n = 5;

for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - (i + 1); j++) {
        row = row + '=';
    }

    for (let k = 0; k < i + 1; k++) {
        row = row + '*';
    }

    console.log(row);
}


// ====*
// ===**
// ==***
// =****
// *****

// */

// let n = 5;

// for (let row = 0; row < n; row++) {
//     let result = "";

//     // spaces
//     for (let space = 0; space < n - row - 1; space++) {
//         result += "=";
//     }

//     // stars
//     for (let star = 0; star <= row; star++) {
//         result += "*";
//     }

//     console.log(result);
// }