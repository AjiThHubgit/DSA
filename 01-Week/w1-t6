import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        System.out.print("Enter the value of X: ");
        int x = scan.nextInt();
        
        if (x <= 0 || x > 1000) {
            System.out.println("The number is not valid - Please enter a number below 1000 and greater than 0.");
        } else {
            for (int i = 1; i * x <= 1000; i++) {
                System.out.println(i * x);
            }
        }
        
        scan.close();
    }
}
