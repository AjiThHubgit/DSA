function sumOfArray(n) {
    if (n === 0) return arr[0];

    return arr[n] + sumOfArray(n - 1);
}


let arr = [5, 3, 4, 0, 1]
console.log(sumOfArray(arr.length - 1));