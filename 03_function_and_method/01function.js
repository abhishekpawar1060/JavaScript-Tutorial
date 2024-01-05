function myFunction(){
    console.log("Hello World!");
}
myFunction();



function myFun(msg){
    // -> parameter -> input
    console.log(msg);
}
myFun("Hi,Abhishek"); // argument



//calculate sum
function sum(num1,num2){
    console.log("Sum is : ", num1+num2);
}
sum(5,14);

function sumFun(num1,num2){ 
    // num1 and num2 is local variable -> block scope
    return num1+num2;
}
console.log(sumFun(2,3));



// Arrow Function
const arrowSum=(num1,num2)=>{
    return num1+num2;
}
console.log(arrowSum(9,8));


const printHello=()=>{
    console.log("Hello World");
}
printHello();


/*
Q1. Create a function using the 'Function' keyword that takes a 
      String that takes a String as an argument & return the number
      of vowels in the strins 
*/
let countVowels=(str)=>{
    let count = 0;
    for(let ch of str){
        if(ch === 'a' || ch === 'i' || ch === 'e' || ch === 'o' || ch === 'u'){
            count++;
        }
    }

    return count;
}
console.log(countVowels("abhishek"));


//forEach loop in Arrays (Higher Order function/Method)
let arr = [1,2,3,5,6,8];

arr.forEach(function printVal(val){
    console.log(val);
});

arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
});



/*
Q. For a given array og numbers.print the square of each 
    of the value using the forEach loop
*/
let myArray = [1,2,3,4,5];
let calculateSqr = (num) => {
    console.log(num*num)
};

myArray.forEach(calculateSqr);



// Map method -> create new Array with the result os some operation
let array = [10,21,35,50,69,80];

let newArray = array.map((val)=>{
    return val*2;
})

console.log(newArray);


// Filter method -> Create new array of element that gives true for condtion/filter
let evenArray = array.filter((val)=>{
    return val%2 === 0;
})

console.log(evenArray);


// Reduce method -> Perform some operation& reduces the array to a single value.It returns that single value
const array1 = [1,2,3,4];
const sumOfArray = array1.reduce((res,curr)=>{
    return res+curr;
});

console.log(sumOfArray);

const maxFromArray = array1.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
})

console.log(maxFromArray);


/*
Q. We are given array of marks of student.
   Filter out of the marks of students that score 90+
*/
let marks = [90,95,85,70,60,96,99,91];
let myMarks = marks.filter((val)=>{
    return val>90;
})

console.log(myMarks);

