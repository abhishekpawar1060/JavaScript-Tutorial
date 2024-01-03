/* Q1. Get the user to input a number using prompt("Enter a number:").
 Chech if the number is a multiple of 5 or not. */

// let num = prompt("Enter the number : ");

// if(num % 5 == 0){
//     console.log(num ,"is multiple of 5 ");
// }
// else{
//     console.log(num," is not multiple of 5");
// }

// Not work in node js module it work on brower

// Q2. Write a code to grades student

let score = 75;
if(score < 100 && score >= 90){
    console.log("A");
}
else if(score < 89 && score >= 70){
    console.log("B");
}
else if(score < 69 && score >= 40){
    console.log("C");
}
else{
    console.log("Failed");
}