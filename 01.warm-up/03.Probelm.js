// Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.

function eligibleToVote(age) {
    if (age < 1) {
        console.log("Invalid Input");
    } else if (age < 18) { // age lesserthan 18
        console.log("Not Eligible To Vote");
    } else {
        console.log("Eligible To Vote");
    }
}

eligibleToVote(21);
eligibleToVote(16);
eligibleToVote(-1);