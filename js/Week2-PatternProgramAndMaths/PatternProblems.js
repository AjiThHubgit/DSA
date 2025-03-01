
// Problem 1

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4

function printTriangle(n) {
    
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        console.log(row);
    }
}

// Test Cases
printTriangle(5);
printTriangle(3);


// Problem 2

// 3 2 1
// 2 1
// 1

function printTriangle(n) {
    for (let i = n; i >= 1; i--) {
        let row = " ";
        for (let j = i; j >= 1; j--) {
            row += j + " ";
        }
        console.log(row);
    }
}

printTriangle(5);

// Problem 3

// 12345
// 1234
// 123
// 12
// 1

function printReverseTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= (n - i + 1); j++) {
            row += j;
        }
        console.log(row);
    }
}

printReverseTriangle(5);

// Problem 4

// *
// ***
// *****
// *******

function StarPattern(n) {
    
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        for (let k = 1;  k <= 2*i - 1; k++) {
            row += "*"
        }
    console.log(row);
    }
}

StarPattern(4);


// Problem 5

// *******
//  *****
//   ***
//    *

function StarPattern(n) {
    
    for (let i = 1; i <= n; i++) {
            let row = "";
            
        for (let j = 1; j <= i - 1; j++) {
            row += " ";
        }
        for (let k = 1; k <= (2*n) - (2 * i - 1); k++) {
            row += "*";
        }
        
        console.log(row);
    }
}

StarPattern(4);


// Problem 6

// 1
// 23
// 456
// 78910

function starPattern(n) {
    let count = 1;
    
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += count++;
        }
        console.log(result);
    }
}

starPattern(4);

// Problem 7

// *

// **

// ***

// ****

function starPattern(n) {
   
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
 }
 
 starPattern(4);

 // Problem 8

//  ******

// *****

// ****

// ***

// **

// *

function starPattern(n) {

    for (let i = 1; i<=n; i++) {
        let row = "";
        for (let j = 1; j <= n - i + 1; j++) {
            row += "*";
        }
        
        console.log(row);
    }   

}

starPattern(6);


// problem 9

// 1 

// 2 2 

// 3 3 3 

// 4 4 4 4 

// 5 5 5 5 5 

// 6 6 6 6 6 6 

// 7 7 7 7 7 7 7 

// 8 8 8 8 8 8 8 8 

function starPattern(n) {

    for (let i = 1; i<=n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i;
        }
        
        console.log(row);
    }   

}

starPattern(8);
