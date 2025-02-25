import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        System.out.println("Please Enter Your Number: ");
        
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
        
        if (num < 35) {
            System.out.println("Fail");
        } else if (num >= 35 && num < 60) {
            System.out.println("Grade D");
        } else if (num >= 60 && num < 80) {
            System.out.println("Grade C");
        } else if (num >= 80 && num < 90) {
            System.out.println("Grade B");
        } else if (num >= 90 && num <=100) {
            System.out.println("Grade A");
        }else {
            System.out.println("check your mark");
        }
        
    }
}
