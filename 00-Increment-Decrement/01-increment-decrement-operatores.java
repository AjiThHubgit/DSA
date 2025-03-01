public class IncrementDecrementExamples {
    public static void main(String[] args) {
        // 1. Basic Post-increment
        int a = 5;
        int b = a++; // b gets 5, then a becomes 6
        System.out.println("1. a = " + a + ", b = " + b); // Output: 6, 5

        // 2. Pre-increment vs Post-increment
        int x = 10;
        int y = ++x + x++; // (++x makes x=11, then x++ uses 11 and increments to 12)
        System.out.println("2. x = " + x + ", y = " + y); // Output: 12, 22

        // 3. Pre-decrement & Post-decrement
        int p = 8;
        int q = p-- - --p; // (p-- makes p=7, then --p makes p=6 before subtraction)
        System.out.println("3. p = " + p + ", q = " + q); // Output: 6, 2

        // 4. Mixing Increment & Arithmetic
        int m = 3, n = 4;
        int result = ++m * n-- - --n * m++; 
        // (++m makes m=4, n-- makes n=3, --n makes n=2, m++ uses 4 and increments to 5)
        System.out.println("4. m = " + m + ", n = " + n + ", result = " + result); // Output: 5, 2, 8

        // 5. Nested Increments
        int a1 = 7;
        int b1 = a1++ + ++a1 + a1++ + ++a1;
        // (a1++ = 7, ++a1 = 9, a1++ = 9, ++a1 = 11)
        System.out.println("5. a1 = " + a1 + ", b1 = " + b1); // Output: 11, 36

        // 6. Using Increment in Loops
        int i = 0;
        System.out.print("6. Loop Output: ");
        while (i < 5) {
            System.out.print(i++ + " "); // (prints 0,1,2,3,4)
        }
        System.out.println(); // Output: 0 1 2 3 4

        // 7. Postfix vs Prefix inside Expressions
        int x1 = 2;
        int y1 = x1++ * 2 + ++x1 * 3; 
        // (x1++ = 2, x1 becomes 3, ++x1 = 4)
        System.out.println("7. x1 = " + x1 + ", y1 = " + y1); // Output: 4, 16

        // 8. Decrement in Expressions
        int a2 = 9;
        int b2 = --a2 + a2-- - --a2;
        // (--a2 = 8, a2-- = 8 (then becomes 7), --a2 = 6)
        System.out.println("8. a2 = " + a2 + ", b2 = " + b2); // Output: 6, 10

        // 9. Combining Increment & Boolean Conditions
        int x2 = 3;
        boolean result2 = (x2++ == 3) && (++x2 == 5);
        // (x2++ is 3, so condition is true, then x2 is incremented to 4. ++x2 makes x2 = 5)
        System.out.println("9. x2 = " + x2 + ", result2 = " + result2); // Output: 5, true

        // 10. Tricky Increment with Assignments
        int a3 = 5, b3 = 10;
        int c = a3++ + b3-- + --a3 + ++b3;
        // (a3++ = 5, b3-- = 10, --a3 = 5, ++b3 = 10)
        System.out.println("10. a3 = " + a3 + ", b3 = " + b3 + ", c = " + c); // Output: 6, 9, 30
    }
}
