//Java

/* 

Prob 1 : Write a program that takes an integer, then a string, then a char from the user and prints them in the screen.

Input:  2 Name y

Expected Output:
2
Name
y

*/


import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Enter the Integer: ");
        int numInteger = scan.nextInt();

        scan.nextLine();

        System.out.println("Enter the String: ");
        String strString = scan.nextLine();

        System.out.println("Enter the Char: ");
        char singleLetterChar = scan.next().charAt(0);

        // Print the inputs
        System.out.println("Entered Integer: " + numInteger);
        System.out.println("Entered String: " + strString);
        System.out.println("Entered Char: " + singleLetterChar);

        scan.close();
    }
}


