// for loop
for(let i = 1; i <= 5; i++){
    console.log(i);
}

//while loop
let j = 1;
while(j <= 5){
    console.log(j);
    j++;
}

//do-while loop
let k = 1;
do{
    console.log(k);
    k++;
}while(k <= 5);


//for-of loop
let str = "Abhishek";
for(let val of str){
    console.log(val);
}


// for-in loop
let student = {
     name : "Abhishek",
     age : 21,
     cgpa : 6.5,
     isPass : true,
};

for(let key in student){
    console.log(student[key]);
}

//Q1. print all even no. from 0 to 100
for(let num = 0; num <= 100; num++){
    if(num % 2 === 0){
        console.log(num);
    }
}

//Q2. Create a game where you start with any random game no.
//    Ask the user to keep guessing the game no. until the user enters correct value.
/*
let gameNum = 25;
let userNo = prompt("Guese the no. : ");
while(userNo != gameNum){
    userNo = prompt("You enter wrong no. Guese again : ");
}
console.log("You win");

*/