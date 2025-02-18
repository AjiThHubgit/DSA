/*

Prob 2: Write a program to check whether a triangle can be formed with the given values for the angles.

If sum of angles is equal to 180, then triangle can be formed, else it can't be formed.

Input: 45 45 45

Expected Output: 

Triangle cannot be formed

Explanation -> We are getting 3 inputs, that is three angles of triangle, but here the sum of three angles that is 45+45+45 is not equal to 180 so Triangle cannot be formed is the output.


*/

import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Enter the first angle: ");
        int angle1 = scan.nextInt();

        System.out.println("Enter the second angle: ");
        int angle2 = scan.nextInt();

        System.out.println("Enter the third angle: ");
        int angle3 = scan.nextInt();

        // Check if the sum of angles equals 180
        if (angle1 + angle2 + angle3 == 180) {
            System.out.println("Triangle can be formed");
        } else {
            System.out.println("Triangle cannot be formed");
        }

        scan.close(); // Close scanner to prevent resource leaks
    }
}
