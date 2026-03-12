function printNto1(n) {

    if (n === 0) return;

    // debugger;
    printNto1(n - 1);
    console.log(n);
}



printNto1(10);